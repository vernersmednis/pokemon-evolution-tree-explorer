import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Text Component (for body text, descriptions, spans)
const textVariants = cva(
  "leading-normal",
  {
    variants: {
      size: {lg: "text-lg", base: "text-base",sm: "text-sm", xs: "text-xs" },
      variant: {default: "text-foreground" },
      weight: { 
        normal: "font-normal", medium: "font-medium",
        semibold: "font-semibold", bold: "font-bold",
      }
    },
    defaultVariants: { size: "base", variant: "default", weight: "normal" },
  }
)

function Text({ 
    className, size, variant, weight, as: Comp = "p", asChild = false, ...props 
}: React.ComponentProps<"p"> & VariantProps<typeof textVariants> & { 
    as?: "p" | "span" | "div" | "label"; asChild?: boolean; 
}) {
  const Component = (asChild ? Slot : Comp) as React.ElementType
  return (
    <Component
      className={cn(textVariants({ size, variant, weight, className }))}
      {...props}
    />
  )
}

// Caption Component (for small helper text, metadata)
const captionVariants = cva(
  "text-xs leading-tight",
  {
    variants: {
      variant: { default: "text-muted-foreground" },
      weight: { normal: "font-normal", medium: "font-medium", semibold: "font-semibold" },
      italic: { true: "italic", false: "" },
    },
    defaultVariants: { variant: "default", weight: "normal", italic: false },
  }
)

function Caption({
    className, variant, weight, italic, as: Comp = "span", asChild = false, ...props
}: React.ComponentProps<"span"> & VariantProps<typeof captionVariants> & {
    as?: "span" | "p" | "div"; asChild?: boolean
}) {
  const Component = (asChild ? Slot : Comp) as React.ElementType
  return (
    <Component
      className={cn(captionVariants({ variant, weight, italic, className }))}
      {...props}
    />
  )
}

export { Text, Caption }
