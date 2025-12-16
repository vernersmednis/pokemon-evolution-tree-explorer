// import '@testing-library/jest-dom'
// import { act, render, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselNext,
// 	CarouselPrevious,
// 	CarouselProgressIndicator,
// 	type CarouselApi,
// } from '../carousel'

// const mockUseEmblaCarousel = jest.fn()

// jest.mock('embla-carousel-react', () => ({
// 	__esModule: true,
// 	default: (...args: unknown[]) => mockUseEmblaCarousel(...args),
// 	useEmblaCarousel: (...args: unknown[]) => mockUseEmblaCarousel(...args),
// }))

// type EmblaApiMock = {
// 	canScrollPrev: jest.Mock<boolean, []>
// 	canScrollNext: jest.Mock<boolean, []>
// 	scrollPrev: jest.Mock<void, []>
// 	scrollNext: jest.Mock<void, []>
// 	scrollTo: jest.Mock<void, [number, boolean?]>
// 	slideNodes: jest.Mock<HTMLElement[], []>
// 	scrollSnapList: jest.Mock<number[], []>
// 	selectedScrollSnap: jest.Mock<number, []>
// 	on: jest.Mock<void, [string, (api: CarouselApi) => void]>
// 	off: jest.Mock<void, [string, (api: CarouselApi) => void]>
// }

// const createEmblaController = () => {
// 	const handlerMap: Record<string, Array<(api: CarouselApi) => void>> = {}

// 	const mockApi = {
// 		canScrollPrev: jest.fn().mockReturnValue(false),
// 		canScrollNext: jest.fn().mockReturnValue(false),
// 		scrollPrev: jest.fn(),
// 		scrollNext: jest.fn(),
// 		scrollTo: jest.fn(),
// 		slideNodes: jest
// 			.fn<HTMLElement[], []>()
// 			.mockReturnValue([
// 				{
// 					scrollHeight: 120,
// 					offsetHeight: 100,
// 					scrollWidth: 220,
// 					offsetWidth: 180,
// 				} as unknown as HTMLElement,
// 			]),
// 		scrollSnapList: jest.fn().mockReturnValue([0, 1, 2]),
// 		selectedScrollSnap: jest.fn().mockReturnValue(0),
// 		on: jest.fn((event: string, handler: (api: CarouselApi) => void) => {
// 			handlerMap[event] = handlerMap[event] || []
// 			handlerMap[event].push(handler)
// 		}),
// 		off: jest.fn((event: string, handler: (api: CarouselApi) => void) => {
// 			handlerMap[event] = (handlerMap[event] || []).filter(
// 				h => h !== handler
// 			)
// 		}),
// 	} as EmblaApiMock

// 	return {
// 		api: mockApi as unknown as CarouselApi,
// 		mockApi,
// 		emit: (event: string) => {
// 			handlerMap[event]?.forEach(handler => handler(mockApi as unknown as CarouselApi))
// 		},
// 	}
// }

// type EmblaController = ReturnType<typeof createEmblaController>

// const rafBackup = globalThis.requestAnimationFrame

// beforeAll(() => {
// 	globalThis.requestAnimationFrame = (cb: FrameRequestCallback): number => {
// 		return window.setTimeout(() => cb(0), 0)
// 	}
// })

// afterAll(() => {
// 	globalThis.requestAnimationFrame = rafBackup
// })

// describe('Carousel suite', () => {
// 	let emblaController: EmblaController
// 	let refCallback: jest.Mock

// 	beforeEach(() => {
// 		jest.clearAllMocks()
// 		emblaController = createEmblaController()
// 		refCallback = jest.fn()
// 		mockUseEmblaCarousel.mockReturnValue([refCallback, emblaController.api])
// 	})

// 	describe('Carousel component behavior', () => {
//         describe('when orientation is horizontal (default)', () => {
//             describe('when positioning is primary (default)', () => {
//                 it('renders appropriate horizontal orientation primary positioning layout styling (default)', () => {
//                     const { baseElement } = render(
//                         <Carousel>
//                             <CarouselPrevious positioning={"primary"} />
//                                 <CarouselContent>
//                                     <div>Slide content</div>
//                                 </CarouselContent>
//                             <CarouselNext positioning={"primary"} />
//                             <CarouselProgressIndicator />
//                         </Carousel>
//                     )
                    
//                     const [optionsArg] = mockUseEmblaCarousel.mock.calls[0]
//                     const carouselRoot = baseElement.querySelector('[data-slot="carousel"]')
//                     const carouselContent = baseElement.querySelector('[data-slot="carousel-content"]')
//                     const carouselPrevious = baseElement.querySelector('[data-slot="carousel-previous"]')
//                     const carouselNext = baseElement.querySelector('[data-slot="carousel-next"]')
//                     const carouselProgressIndicator = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')

//                     expect(optionsArg).toEqual(expect.objectContaining({ axis: 'x' }))
//                     expect(carouselRoot).toHaveAttribute('aria-roledescription', 'carousel')
//                     expect(carouselRoot?.className).toContain('grid grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto]')
//                     expect(carouselContent?.className).toContain('col-span-2 row-start-1')
//                     expect(carouselContent?.firstElementChild?.className).not.toContain('flex-col')
//                     expect(carouselPrevious?.className).toContain('[&>span]:sr-only absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2')
//                     expect(carouselNext?.className).toContain('[&>span]:sr-only absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2')
//                     expect(carouselProgressIndicator?.className).toContain('col-span-2 row-start-3')
//                 })
//             })

//             describe('when positioning is secondary (default)', () => {
//                 it('renders appropriate horizontal orientation secondary positioning layout styling', () => {
//                     const { baseElement } = render(
//                         <Carousel>
//                             <CarouselPrevious positioning={"secondary"} />
//                                 <CarouselContent>
//                                     <div>Slide content</div>
//                                 </CarouselContent>
//                             <CarouselNext positioning={"secondary"} />
//                             <CarouselProgressIndicator />
//                         </Carousel>
//                     )
                    
//                     const [optionsArg] = mockUseEmblaCarousel.mock.calls[0]
//                     const carouselRoot = baseElement.querySelector('[data-slot="carousel"]')
//                     const carouselContent = baseElement.querySelector('[data-slot="carousel-content"]')
//                     const carouselPrevious = baseElement.querySelector('[data-slot="carousel-previous"]')
//                     const carouselNext = baseElement.querySelector('[data-slot="carousel-next"]')
//                     const carouselProgressIndicator = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')

//                     expect(optionsArg).toEqual(expect.objectContaining({ axis: 'x' }))
//                     expect(carouselRoot).toHaveAttribute('aria-roledescription', 'carousel')
//                     expect(carouselRoot?.className).toContain('grid grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto]')
//                     expect(carouselContent?.className).toContain('col-span-2 row-start-1')
//                     expect(carouselContent?.firstElementChild?.className).not.toContain('flex-col')
//                     expect(carouselPrevious?.className).toContain('w-fit col-start-1 row-start-2 justify-self-start')
//                     expect(carouselNext?.className).toContain('w-fit col-start-2 row-start-2 justify-self-end')
//                     expect(carouselProgressIndicator?.className).toContain('col-span-2 row-start-3')
//                 })
//             })
//         })
        
//         describe('when orientation is vertical', () => {
//             describe('when positioning is primary (default)', () => {
//                 it('renders appropriate horizontal orientation primary positioning layout styling', () => {
//                     const { baseElement } = render(
//                         <Carousel orientation={"vertical"}>
//                             <CarouselPrevious positioning={"primary"} />
//                                 <CarouselContent>
//                                     <div>Slide content</div>
//                                 </CarouselContent>
//                             <CarouselNext positioning={"primary"} />
//                             <CarouselProgressIndicator />
//                         </Carousel>
//                     )
                    
//                     const [optionsArg] = mockUseEmblaCarousel.mock.calls[0]
//                     const carouselRoot = baseElement.querySelector('[data-slot="carousel"]')
//                     const carouselContent = baseElement.querySelector('[data-slot="carousel-content"]')
//                     const carouselPrevious = baseElement.querySelector('[data-slot="carousel-previous"]')
//                     const carouselNext = baseElement.querySelector('[data-slot="carousel-next"]')
//                     const carouselProgressIndicator = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')

//                     expect(optionsArg).toEqual(expect.objectContaining({ axis: 'y' }))
//                     expect(carouselRoot).toHaveAttribute('aria-roledescription', 'carousel')
//                     expect(carouselRoot?.className).toContain('grid grid-cols-[min-content_auto] grid-rows-[min-content_auto_auto]')
//                     expect(carouselContent?.className).toContain('col-start-1 row-start-2')
//                     expect(carouselContent?.firstElementChild?.className).toContain('flex-col')
//                     expect(carouselPrevious?.className).toContain('[&>span]:sr-only absolute size-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90')
//                     expect(carouselNext?.className).toContain('[&>span]:sr-only absolute size-8 rounded-full -bottom-12 left-1/2 -translate-x-1/2 rotate-90')
//                     expect(carouselProgressIndicator?.className).toContain('flex-col col-start-2 col-span-1 row-span-3')
//                 })
//             })

//             describe('when positioning is secondary (default)', () => {
//                 it('renders appropriate horizontal orientation secondary positioning layout styling', () => {
//                     const { baseElement } = render(
//                         <Carousel orientation={"vertical"}>
//                             <CarouselPrevious positioning={"secondary"} />
//                                 <CarouselContent>
//                                     <div>Slide content</div>
//                                 </CarouselContent>
//                             <CarouselNext positioning={"secondary"} />
//                             <CarouselProgressIndicator />
//                         </Carousel>
//                     )
                    
//                     const [optionsArg] = mockUseEmblaCarousel.mock.calls[0]
//                     const carouselRoot = baseElement.querySelector('[data-slot="carousel"]')
//                     const carouselContent = baseElement.querySelector('[data-slot="carousel-content"]')
//                     const carouselPrevious = baseElement.querySelector('[data-slot="carousel-previous"]')
//                     const carouselNext = baseElement.querySelector('[data-slot="carousel-next"]')
//                     const carouselProgressIndicator = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')

//                     expect(optionsArg).toEqual(expect.objectContaining({ axis: 'y' }))
//                     expect(carouselRoot).toHaveAttribute('aria-roledescription', 'carousel')
//                     expect(carouselRoot?.className).toContain('grid grid-cols-[min-content_auto] grid-rows-[min-content_auto_auto]')
//                     expect(carouselContent?.className).toContain('col-start-1 row-start-2')
//                     expect(carouselContent?.firstElementChild?.className).toContain('flex-col')
//                     expect(carouselPrevious?.className).toContain('w-fit col-start-1 row-start-1 justify-self-center')
//                     expect(carouselNext?.className).toContain('w-fit col-start-1 row-start-3 justify-self-center')
//                     expect(carouselProgressIndicator?.className).toContain('flex-col col-start-2 col-span-1 row-span-3')
//                 })
//             })
//         })

// 		it('applies carousel options and exposes the api via setApi', async () => {
// 			const setApi = jest.fn()
// 			const opts = { startIndex: 2, loop: true }

// 			render(
// 				<Carousel opts={opts} setApi={setApi}>
// 					<div>Slide content</div>
// 				</Carousel>
// 			)

// 			const [optionsArg] = mockUseEmblaCarousel.mock.calls[0]

// 			// 1: Verify that the carousel options (opts) are correctly passed to useEmblaCarousel, including the default axis and provided loop/startIndex
// 			expect(optionsArg).toEqual(
// 				expect.objectContaining({ axis: 'x', loop: true, startIndex: 2 })
// 			)

// 			// 2: Ensure the setApi callback is invoked with the Embla API instance once the carousel initializes
// 			await waitFor(() => expect(setApi).toHaveBeenCalledWith(emblaController.api))

// 			act(() => {
// 				emblaController.emit('reInit')
// 			})

// 			// 3: Check that on reInit event, the carousel scrolls to the specified startIndex (2) instantly
// 			expect(emblaController.mockApi.scrollTo).toHaveBeenCalledWith(2, true)
// 		})

// 		it('forwards plugins array to useEmblaCarousel', () => {
// 			const plugins = [{ pluginName: 'mock' }] as never[]

// 			render(
// 				<Carousel plugins={plugins}>
// 					<div>Slide content</div>
// 				</Carousel>
// 			)

// 			const [, pluginsArg] = mockUseEmblaCarousel.mock.calls[0]
// 			expect(pluginsArg).toBe(plugins)
// 		})

// 		it('renders arbitrary children inside the carousel region', () => {
// 			const { baseElement } = render(
// 				<Carousel>
// 					<p>Child node</p>
// 				</Carousel>
// 			)

// 			const carouselRoot = baseElement.querySelector('[data-slot="carousel"]')
// 			expect(carouselRoot?.children.length).toBeGreaterThan(0)
// 		})
// 	})

// 	describe('CarouselProgressIndicator', () => {
// 		it('renders numeric labels when none are provided', async () => {
// 			emblaController.mockApi.scrollSnapList.mockReturnValue([0, 1, 2])

// 			const { baseElement } = render(
// 				<Carousel>
// 					<CarouselProgressIndicator />
// 				</Carousel>
// 			)

// 			await waitFor(() => {
// 				const progress = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')
// 				const buttons = progress?.querySelectorAll('button') ?? []

// 				expect(buttons.length).toBe(3)
// 				expect(buttons[0]).toBeDisabled()
// 				expect(buttons[1]?.textContent).toBe('2')
// 				expect(buttons[2]?.textContent).toBe('3')
// 			})
// 		})

// 		it('renders provided labels', async () => {
// 			const labels = ['Bulbasaur', 'Ivysaur', 'Venusaur']
// 			emblaController.mockApi.scrollSnapList.mockReturnValue([0, 1, 2])

// 			const { baseElement } = render(
// 				<Carousel>
// 					<CarouselProgressIndicator labels={labels} />
// 				</Carousel>
// 			)

// 			const progress = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')

// 			await waitFor(() => {
// 				labels.forEach(label => {
// 					expect(progress?.textContent).toContain(label)
// 				})
// 			})
// 		})

// 		it('invokes custom onSelect handlers', async () => {
// 			const labels = ['One', 'Two', 'Three']
// 			const onSelect = jest.fn()
// 			emblaController.mockApi.scrollSnapList.mockReturnValue([0, 1, 2])
// 			const user = userEvent.setup()

// 			const { baseElement } = render(
// 				<Carousel>
// 					<CarouselProgressIndicator labels={labels} onSelect={onSelect} />
// 				</Carousel>
// 			)

// 			const progress = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')
// 			const buttons = progress?.querySelectorAll('button') ?? []

// 			await user.click(buttons[1]!)

// 			expect(onSelect).toHaveBeenCalledWith(1)
// 			expect(emblaController.mockApi.scrollTo).not.toHaveBeenCalled()
// 		})

// 		it('scrolls the carousel when onSelect is not provided', async () => {
// 			emblaController.mockApi.scrollSnapList.mockReturnValue([0, 1, 2])
// 			const user = userEvent.setup()

// 			const { baseElement } = render(
// 				<Carousel>
// 					<CarouselProgressIndicator />
// 				</Carousel>
// 			)

// 			const progress = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')
// 			const buttons = progress?.querySelectorAll('button') ?? []

// 			await user.click(buttons[1]!)

// 			expect(emblaController.mockApi.scrollTo).toHaveBeenCalledWith(1)
// 		})

// 		it('updates the active indicator when selection changes', () => {
// 			emblaController.mockApi.scrollSnapList.mockReturnValue([0, 1, 2])

// 			const { baseElement } = render(
// 				<Carousel>
// 					<CarouselProgressIndicator />
// 				</Carousel>
// 			)

// 			const progress = baseElement.querySelector('[data-slot="carousel-progress-indicator"]')
// 			const buttons = progress?.querySelectorAll('button') ?? []

// 			emblaController.mockApi.selectedScrollSnap.mockReturnValue(2)

// 			act(() => {
// 				emblaController.emit('select')
// 			})

// 			expect(buttons[2]).toBeDisabled()
// 			expect(buttons[0]).not.toBeDisabled()
// 		})
// 	})
// })
