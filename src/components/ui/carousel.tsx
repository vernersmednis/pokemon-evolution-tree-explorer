import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn(
          orientation === "horizontal" ?
          "relative grid grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto] gap-1 " :
          "relative grid grid-cols-[min-content_auto] grid-rows-[min-content_auto_auto] gap-1 ",
          className
        )}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation, api } = useCarousel()
  const [contentHeight, setContentHeight] = React.useState<number | undefined>(undefined)
  const [contentWidth, setContentWidth] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    // Bail out if the Embla API is not ready.
    if (!api) return

    // Compute and set the content's natural width/height from all slides.
    const updateSize = () => {
      const slides = api.slideNodes()

      // Nothing to do when there are no slides.
      if (slides.length === 0) return

      // Measure after layout using requestAnimationFrame for accuracy.
      requestAnimationFrame(() => {
        // Find the maximum height and width across slides.
        let maxHeight = 0
        let maxWidth = 0

        slides.forEach(slide => {
          // Use scroll/offset dimensions to capture content-driven size.
          const height = Math.max(slide.scrollHeight, slide.offsetHeight)
          const width = Math.max(slide.scrollWidth, slide.offsetWidth)

          if (height > maxHeight) maxHeight = height
          if (width > maxWidth) maxWidth = width
        })

        // Update state with the measured maxima.
        setContentHeight(maxHeight)
        setContentWidth(maxWidth)
      })
    }

    // Initialize measurement and subscribe to Embla lifecycle events.
    updateSize()
    api.on("reInit", updateSize)
    api.on("select", updateSize)

    // Cleanup: remove event listeners and disconnect the observer.
    return () => {
      api.off("reInit", updateSize)
      api.off("select", updateSize)
    }
  }, [api])

  return (
    <div
      ref={carouselRef}
      className={cn(
        "overflow-hidden w-fit h-fit justify-self-center p-2",
        orientation === "horizontal" ? "col-span-2 row-start-1" : "col-start-1 row-start-2"
      )}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "gap-4 flex",
          orientation === "horizontal" ? "" : "flex-col",
          className
        )}
        style={{
          height: contentHeight ? `${contentHeight}px` : "auto",
          width: contentWidth ? `${contentWidth}px` : "auto",
        }}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "w-fit h-fit",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  positioning = "primary",
  ...props
}: React.ComponentProps<typeof Button> & { positioning?: "primary" | "secondary" }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  const positionClasses = {
    horizontal: {
      primary: "[&>span]:sr-only absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2",
      secondary: "w-fit col-start-1 row-start-2 justify-self-start"
    },
    vertical: {
      primary: "[&>span]:sr-only absolute size-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90",
      secondary: "w-fit col-start-1 row-start-1 justify-self-center"
    }
  } as const

  const buttonClasses = positionClasses[orientation || "horizontal"][positioning]

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(buttonClasses, className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {orientation == "horizontal" ? (
        <>
          <ArrowLeft /><span>Previous slide</span>
        </>
      ) : (
        <>
          <ChevronUp /><span>Previous slide</span>
        </>
      )}
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  positioning = "primary",
  ...props
}: React.ComponentProps<typeof Button> & { positioning?: "primary" | "secondary" }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  const positionClasses = {
    horizontal: {
      primary: "[&>span]:sr-only absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2",
      secondary: "w-fit col-start-2 row-start-2 justify-self-end"
    },
    vertical: {
      primary: "[&>span]:sr-only absolute size-8 rounded-full -bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      secondary: "w-fit col-start-1 row-start-3 justify-self-center"
    }
  } as const

  const buttonClasses = positionClasses[orientation || "horizontal"][positioning]

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(buttonClasses, className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {orientation == "horizontal" ? (
        <>
          <span>Next slide</span><ArrowRight />
        </>
      ) : (
        <>
          <ChevronDown /><span>Next slide</span>
        </>
      )}
    </Button>
  )
}

const carouselProgressItemVariants = cva(
  "inline-flex items-center justify-center min-w-[2rem] px-2 py-1 text-xs font-medium rounded transition-all border",
  {
    variants: {
      variant: {
        default: "border-gray-300 text-foreground hover:border-gray-400",
        "default-active": "border-gray-500 bg-gray-100 text-foreground",
        pokeball: "border-red-300 text-foreground hover:border-red-400",
        "pokeball-active": "border-red-500 bg-red-50 text-foreground",
        greatball: "border-blue-300 text-foreground hover:border-blue-400",
        "greatball-active": "border-blue-500 bg-blue-50 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function CarouselProgressIndicator({
  className,
  variant = "default",
  labels,
  onSelect,
  ...props
}: Omit<React.ComponentProps<"div">, "onSelect"> & {
  variant?: "default" | "pokeball" | "greatball"
  labels?: string[]
  onSelect?: (index: number) => void
}) {
  const { api, orientation } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [slideCount, setSlideCount] = React.useState(0)

  // Initialize and synchronize progress indicator with carousel state
  React.useEffect(() => {
    if (!api) return

    // Set initial slide count and selected index from the carousel API
    setSlideCount(api.scrollSnapList().length)
    setSelectedIndex(api.selectedScrollSnap())

    // Update selected index whenever the carousel slide changes
    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap())
    
    // Subscribe to carousel select events
    api.on("select", handleSelect)
    
    // Cleanup: unsubscribe from events when component unmounts or API changes
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  // Handle clicks on progress indicator items
  const handleItemClick = (index: number) => {
    // If custom onSelect handler is provided, use it
    if (onSelect) {
      onSelect(index)
    } else {
      // Otherwise, scroll carousel to the clicked index
      api?.scrollTo(index)
    }
  }

  // Generate the appropriate variant string based on active state
  const getItemVariant = (isActive: boolean) => {
    const suffix = isActive ? "-active" : ""
    return `${variant}${suffix}` as const
  }

  // Use provided labels or generate default numeric labels (1, 2, 3, ...)
  const displayLabels = labels || Array.from({ length: slideCount }, (_, i) => `${i + 1}`)

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full gap-[1.5%] py-2",
        `${orientation === "horizontal" ? "col-span-2 row-start-3" : "flex-col col-start-2 col-span-1 row-span-3"}`,
        className
      )}
      role="navigation"
      aria-label="Carousel progress"
      aria-roledescription="carousel progress indicator"
      data-slot="carousel-progress-indicator"
      {...props}
    >
      {displayLabels.map((label, index) => {
        const isActive = index === selectedIndex
        
        return (
          <Button
            key={index}
            onClick={() => handleItemClick(index)}
            className={cn(
              carouselProgressItemVariants({ variant: getItemVariant(isActive) }),
              !isActive && "opacity-50"
            )}
            aria-label={`Go to slide ${index + 1}: ${label}`}
            aria-current={isActive ? "true" : undefined}
            disabled={isActive}
            variant="ghost"
            size="sm"
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselProgressIndicator,
}
