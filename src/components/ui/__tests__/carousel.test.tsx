import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
	CarouselItem,
	CarouselProgressIndicator,
	type CarouselApi,
} from '../carousel'

// Mock embla to avoid DOM-dependent behavior during tests
jest.mock('embla-carousel-react', () => {
  const ReactLib = React

  const handlers: Record<string, Array<(api: typeof mockApi) => void>> = {}

  const snapList = [0, 1, 2, 3]
  let selectedIndex = 0

  const clampIndex = (index: number) => {
    if (index < 0) return 0
    const last = snapList.length - 1
    if (index > last) return last
    return index
  }

  const emitEvent = (event: 'init' | 'reInit' | 'select') => {
    ;(handlers[event] || []).forEach((cb) => cb(mockApi))
  }

  const mockApi = {
    scrollPrev: jest.fn(() => {
      selectedIndex = clampIndex(selectedIndex - 1)
      emitEvent('select')
    }),
    scrollNext: jest.fn(() => {
      selectedIndex = clampIndex(selectedIndex + 1)
      emitEvent('select')
    }),
    scrollTo: jest.fn((index: number) => {
      selectedIndex = clampIndex(index)
      emitEvent('select')
    }),
    canScrollPrev: jest.fn(() => selectedIndex > 0),
    canScrollNext: jest.fn(() => selectedIndex < snapList.length - 1),
    scrollSnapList: jest.fn(() => snapList),
    selectedScrollSnap: jest.fn(() => selectedIndex),
    slideNodes: jest.fn(() => []),
    on: jest.fn((event: 'init' | 'reInit' | 'select', cb: (api: typeof mockApi) => void) => {
      handlers[event] ||= []
      handlers[event].push(cb)
      cb(mockApi)
    }),
    off: jest.fn((event: string, cb: (api: typeof mockApi) => void) => {
      handlers[event] = (handlers[event] || []).filter((fn) => fn !== cb)
    }),
    emit: jest.fn((event: 'init' | 'reInit' | 'select') => {
      emitEvent(event)
    }),
  }

  const useEmblaCarousel = () => {
    const ref = ReactLib.useCallback(() => {}, [])
    return [ref, mockApi] as const
  }

  return {
    __esModule: true,
    default: useEmblaCarousel,
    useEmblaCarousel,
  }
})

type MockCarouselOptions = object

describe('Carousel suite', () => {
  const initialIndex = 0 // Define this if needed
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('when using carousel components outside carousel provider', () => {
    it('must throw an error', () => {
      expect(() => render(<CarouselNext />)).toThrow('useCarousel must be used within a <Carousel />')
    })
  })

  // Helper function to render the carousel with customizable positioning
  const renderCarousel = (options: {
    setCarouselApi?: (api: CarouselApi) => void;
    positioning?: 'primary' | 'secondary';
    orientation?: 'horizontal' | 'vertical';
    labels?: string[];
    opts?: MockCarouselOptions;
  } = {}) => {
    const {
      setCarouselApi = () => {},
      positioning = 'primary',
      orientation = 'horizontal',
      labels = ['1.', '2.', '3.', '4.'],
      opts
    } = options;

    return render(
      <Carousel
        setApi={setCarouselApi}
        orientation={orientation}
        opts={opts ?? { startIndex: initialIndex }}
      >
        <CarouselPrevious positioning={positioning} />
        <CarouselContent>
          <CarouselItem key="item-1">Item 1</CarouselItem>
          <CarouselItem key="item-2">Item 2</CarouselItem>
          <CarouselItem key="item-3">Item 3</CarouselItem>
          <CarouselItem key="item-4">Item 4</CarouselItem>
        </CarouselContent>
        <CarouselNext positioning={positioning} />
        <CarouselProgressIndicator labels={labels} />
      </Carousel>
    );
  };

  describe('when initialized with full composition', () => {
    const defaultOptions = {};
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderCarousel(currentOptions)
    });
    
    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    })

    it('must render all 4 carousel items', () => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
      expect(screen.getByText('Item 4')).toBeInTheDocument();
    });

    it('must render carousel content', () => {
      expect(screen.getByTestId('carousel-content')).toBeInTheDocument();
    });
    
    it('must render "previous" and "next" buttons', () => {
      expect(screen.getByTestId('carousel-previous')).toBeInTheDocument();
      expect(screen.getByTestId('carousel-next')).toBeInTheDocument();
    });
    
    it('must render carousel progress indicator with correct labels', () => {
      expect(screen.getByTestId('carousel-progress-indicator')).toBeInTheDocument();
    });
    
    it('must render carousel root component', () => {
      expect(screen.getByTestId('carousel')).toBeInTheDocument();
    });
    
    describe('when initialized', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });    

      it('must have been initialized with the initial slide and without scrolling animation', () => {
        expect(api?.scrollTo).toHaveBeenCalledWith(initialIndex, true);
      });

      it('must have checked if can scroll to previous slide and if can scroll to next slide', () => {
        expect(api?.canScrollPrev).toHaveBeenCalled();
        expect(api?.canScrollNext).toHaveBeenCalled();
      });
    });    
      
    describe('when reinitialized', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });

      beforeEach(() => {
        jest.clearAllMocks();
        act(() => { api?.emit('reInit') })
      });

      it('must have been initialized with the initial slide and without scrolling animation', () => {
        expect(api?.scrollTo).toHaveBeenCalledWith(initialIndex, true);
      });

      it('must have checked if can scroll to previous slide and if can scroll to next slide', () => {
        expect(api?.canScrollPrev).toHaveBeenCalled();
        expect(api?.canScrollNext).toHaveBeenCalled();
      });
    });

    describe('when "next" button is clicked', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });

      beforeEach(async () => {
        jest.clearAllMocks();
        await user.click(screen.getByTestId('carousel-next'));
      });

      it('must scroll to the next item', () => {
        expect(api?.scrollNext).toHaveBeenCalled();
      });
    });

    describe('when "previous" button is clicked', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { 
          opts: { startIndex: 2 },
          setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } 
        };
      });

      beforeEach(async () => {
        await user.click(screen.getByTestId('carousel-previous'));
      });

      it('must scroll to the previous item', () => {
        expect(api?.scrollPrev).toHaveBeenCalled();
      });
    });

    describe('when navigating by keyboard', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      })

      describe('when "ArrowUp" key is pressed', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          fireEvent.keyDown(screen.getByTestId('carousel'), { key: 'ArrowUp' })
        })

        it('must scroll to the previous item', () => {
          expect(api?.scrollPrev).toHaveBeenCalled()
        })
      })

      describe('when "ArrowLeft" key is pressed', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          fireEvent.keyDown(screen.getByTestId('carousel'), { key: 'ArrowLeft' })
        })

        it('must scroll to the previous item', () => {
          expect(api?.scrollPrev).toHaveBeenCalled()
        })
      })

      describe('when "ArrowDown" key is pressed', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          fireEvent.keyDown(screen.getByTestId('carousel'), { key: 'ArrowDown' })
        })

        it('must scroll to the next item', () => {
          expect(api?.scrollNext).toHaveBeenCalled()
        })
      })
      
      describe('when "ArrowRight" key is pressed', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          fireEvent.keyDown(screen.getByTestId('carousel'), { key: 'ArrowRight' })
        })

        it('must scroll to the next item', () => {
          expect(api?.scrollNext).toHaveBeenCalled()
        })
      })
    })
    
    describe('when progress indicator buttons are clicked', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });
      
      describe('when button "3." is clicked', () => {
        beforeEach(async () => {
          await user.click(screen.getByText('3.'));
        });

        it('must scroll to item 3', () => {
          expect(api?.scrollTo).toHaveBeenCalledWith(2);
        });
      });
    });

    describe('when passing prop "orientation" and passing prop "positioning"', () => {
      describe('when passing as "horizontal" (default) and "primary" (default)', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'horizontal', positioning: 'primary' };
        });

        it('must render with horizontal orientation and "previous" and "next" buttons in primary positioning', () => {
          expect(screen.getByTestId('carousel')).toHaveClass('grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto]');
          expect(screen.getByTestId('carousel-previous')).toHaveClass('[&>span]:sr-only absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2');
          expect(screen.getByTestId('carousel-next')).toHaveClass('[&>span]:sr-only absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2');
        });
      });
      describe('when passing as "vertical" and "primary" (default)', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'vertical', positioning: 'primary' };
        });

        it('must render with vertical orientation and "previous" and "next" buttons in primary positioning', () => {
          expect(screen.getByTestId('carousel')).toHaveClass('grid-cols-[min-content_auto] grid-rows-[min-content_auto_auto]');
          expect(screen.getByTestId('carousel-previous')).toHaveClass('[&>span]:sr-only absolute size-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90');
          expect(screen.getByTestId('carousel-next')).toHaveClass('[&>span]:sr-only absolute size-8 rounded-full -bottom-12 left-1/2 -translate-x-1/2 rotate-90');
        });
      });

      describe('when passing as "horizontal" (default) and "secondary"', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'horizontal', positioning: 'secondary' };
        });

        it('must render with horizontal orientation and "previous" and "next" buttons in secondary positioning', () => {
          expect(screen.getByTestId('carousel')).toHaveClass('grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto]');
          expect(screen.getByTestId('carousel-previous')).toHaveClass('w-fit col-start-1 row-start-2 justify-self-start');
          expect(screen.getByTestId('carousel-next')).toHaveClass('w-fit col-start-2 row-start-2 justify-self-end');
        });
      });

      describe('when passing as "vertical" and "secondary"', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'vertical', positioning: 'secondary' };
        });

        it('must render with vertical orientation and "previous" and "next" buttons in secondary positioning', () => {
          expect(screen.getByTestId('carousel')).toHaveClass('grid-cols-[min-content_auto] grid-rows-[min-content_auto_auto]');
          expect(screen.getByTestId('carousel-previous')).toHaveClass('w-fit col-start-1 row-start-1 justify-self-center');
          expect(screen.getByTestId('carousel-next')).toHaveClass('w-fit col-start-1 row-start-3 justify-self-center');
        });
      });
    });

    describe('when pass prop "labels" [\'A.\', \'B.\', \'C.\', \'D.\'] for carousel progress indicator', () => {

      beforeAll(() => {
        currentOptions = { labels: ['A.', 'B.', 'C.', 'D.'] };
      });

      it('must render the custom labels', () => {
        expect(screen.getByText('A.')).toBeInTheDocument();
        expect(screen.getByText('B.')).toBeInTheDocument();
        expect(screen.getByText('C.')).toBeInTheDocument();
        expect(screen.getByText('D.')).toBeInTheDocument();
      });
    });

    describe('when pass prop "opts" for carousel root component', () => {
      let api: CarouselApi | undefined;

      describe('with startIndex: 2', () => {
        beforeAll(() => {
          api = undefined; // Reset for each test
          currentOptions = {
            opts: { startIndex: 2 },
            setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; }
          };
        });

        it('must have been initialized with the initial slide item 3 and without scrolling animation', () => {
          expect(api?.scrollTo).toHaveBeenCalledWith(2, true);
        });
      });
    });

    describe('when pass prop "plugins" for carousel root component', () => {
      
      describe('with plugin "Auto Height" ', () => {
        it.todo('must initialize embla with the "Auto Height" plugin')
      });
    });

    describe('when selecting a slide', () => {
      let api: CarouselApi | undefined;

      beforeAll(() => {
        api = undefined; // Reset for each test
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });

      beforeEach(() => {
        jest.clearAllMocks();
        act(() => { api?.emit('select') })
      });

      it('must have checked if can scroll to previous slide and if can scroll to next slide', () => {
        expect(api?.canScrollPrev).toHaveBeenCalled();
        expect(api?.canScrollNext).toHaveBeenCalled();
      });

      it('must highlight a progress indicator button (corresponding to the current slide) as active', () => {
        const buttons = screen.getByTestId('carousel-progress-indicator').querySelectorAll('button');
        const selectedIndex = api!.selectedScrollSnap();
        expect(buttons[selectedIndex]).toBeDisabled();
        expect(buttons[selectedIndex]).toHaveAttribute('aria-current', 'true');
      });

      it('must unhighlight other buttons as inactive', () => {
        const buttons = screen.getByTestId('carousel-progress-indicator').querySelectorAll('button');
        const selectedIndex = api!.selectedScrollSnap();

        buttons.forEach((button, index) => {
          if (index !== selectedIndex) {
            expect(button).not.toBeDisabled();
            expect(button).not.toHaveAttribute('aria-current');
          }
        });
      });
    });

    /*
    api.on("init", handleReInit)
    api.on("select", onSelect)
    udateSize() // I don't know how to implement this test
    api.on("select", updateSize) // I don't know how to implement this test

    // canScrollPrev and canScrollNext should be set on prev and next button clicking
    // on clicking progress indicator buttons should select appropriate slide 
    //  and highlight/unhighlight appropriate progress indicator button 
    
    api.on("select", handleSelect)
    
    */
  });
});