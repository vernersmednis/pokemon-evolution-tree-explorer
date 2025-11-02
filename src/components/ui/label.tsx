import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

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

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
