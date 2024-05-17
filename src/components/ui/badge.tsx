import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border rounded-[3px] py-[2px] px-[6px] font-medium leading-6",
  {
    variants: {
      variant: {
        default: "text-default",
        completed: "bg-[#727e8a] text-white",
        progressing: "bg-accent-900 text-white",
      },
      size: {
        default: "text-[12px]",
        lg: "text-[14px]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

