import React from "react";

export type SpanVariant = "default" | "badge" | "id" | "stat-value";

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: SpanVariant;
}
