import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, act } from '@testing-library/react'
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

  const mockApi = {
    scrollPrev: jest.fn(),
    scrollNext: jest.fn(),
    scrollTo: jest.fn(),
    canScrollPrev: jest.fn(() => true),
    canScrollNext: jest.fn(() => true),
    scrollSnapList: jest.fn(() => [0, 1, 2, 3]),
    selectedScrollSnap: jest.fn(() => 0),
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
      (handlers[event] || []).forEach((cb) => cb(mockApi))
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
        currentOptions = { setCarouselApi: (capturedApi: CarouselApi) => { api = capturedApi; } };
      });

      beforeEach(async () => {
        await user.click(screen.getByTestId('carousel-previous'));
      });

      it('must scroll to the previous item', () => {
        expect(api?.scrollPrev).toHaveBeenCalled();
      });
    });
    
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
    
    describe('when pass prop "positioning" secondary for "previous" and "next" buttons', () => {
      beforeAll(() => {
        currentOptions = { positioning: 'secondary' };
      });

      it.todo('must render the buttons in secondary positioning')
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

    
    describe('when pass prop "orientation" vertical for carousel root component', () => {
      beforeAll(() => {
        currentOptions = { orientation: 'vertical' };
      });

      it.todo('must be vertically oriented')
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

    /*
    api.on("init", handleReInit)
    api.on("select", onSelect)
    udateSize()
    api.on("select", updateSize)

    // canScrollPrev and canScrollNext should be set on prev and next button clicking
    // on clicking progress indicator buttons should select appropriate slide
    //  and enable disable appropriate progress indicator button
    
    api.on("select", handleSelect)
    
    */
  });
});