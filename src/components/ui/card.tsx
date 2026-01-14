import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm",
  {
    variants: {
      variant: {
        default: "py-6",
        featured: "border-red-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-red-50 py-8",
        tip: "border-gray-100 shadow-sm py-4 hover:border-red-200 transition-all hover:shadow-md",
        pokeball: "border-red-300 shadow-md hover:shadow-lg transition-all bg-red-50 py-6 hover:border-red-400",
        "pokeball-outline": "border border-red-400 shadow-sm bg-white hover:shadow-md transition-all py-6 hover:bg-red-100",
        "pokeball-outline-secondary": "border border-red-400 shadow-sm bg-white transition-all py-6",
        "pokeball-ghost": "text-red-600 hover:bg-red-100 hover:text-red-700 transition-all py-6",
        greatball: "border-blue-300 shadow-md hover:shadow-lg transition-all bg-blue-50 py-6 hover:border-blue-400",
        "greatball-outline": "border border-blue-400 shadow-sm bg-white hover:shadow-md transition-all py-6 hover:bg-blue-100",
        "greatball-outline-secondary": "border border-blue-400 shadow-sm bg-white transition-all py-6",
        "greatball-ghost": "text-blue-600 hover:bg-blue-150 hover:text-blue-700 transition-all py-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Card({ 
  className, 
  variant,
  ...props 
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
