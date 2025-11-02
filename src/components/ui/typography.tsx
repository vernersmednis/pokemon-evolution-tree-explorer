import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


// Use the semantic `Label` (src/components/ui/label.tsx) for form labels when you
// need accessibility linkage (e.g. htmlFor -> input) and form-specific behaviors.
//
// Use `<Typography as="label">` only for presentational label-like text that is
// NOT linked to a form control. It applies typography styling but does not provide
// the accessibility features of the form `Label` component.
//
// Examples:
//   // Semantic form label (preferred for forms)
//   <Label htmlFor="name">Name</Label>
//
//   // Presentational label-like text (no htmlFor/accessibility linkage)
//   <Typography as="label">HP</Typography>

const typographyVariants = cva(
  "",
  {
    variants: {
      variant: {
        // Default color variants
        body: "text-base leading-7 font-normal text-foreground",
        subtitle: "text-lg leading-snug font-semibold text-foreground",
        caption: "text-sm leading-tight font-medium text-muted-foreground",
        
        // Pokeball color variants (red)
        "pokeball-body": "text-base leading-7 font-normal text-red-600",
        "pokeball-subtitle": "text-lg leading-snug font-semibold text-red-600",
        "pokeball-caption": "text-sm leading-tight font-medium text-red-400",

        // Greatball color variants (blue)
        "greatball-body": "text-base leading-7 font-normal text-blue-600",
        "greatball-subtitle": "text-lg leading-snug font-semibold text-blue-600",
        "greatball-caption": "text-sm leading-tight font-medium text-blue-400",
      }
    },
    defaultVariants: {
      variant: "body",
    },
  }
)

function Typography({ 
    className, 
    variant, 
    as: Comp = "p", 
    asChild = false, 
    ...props 
}: React.ComponentProps<"p"> & VariantProps<typeof typographyVariants> & { 
    as?: "p" | "span" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; 
    asChild?: boolean; 
}) {
  const Component = (asChild ? Slot : Comp) as React.ElementType
  return (
    <Component
      data-slot="typography"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Typography }
