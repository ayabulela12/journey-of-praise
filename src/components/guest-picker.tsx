"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

export const MIN_GUESTS = 1
export const MAX_GUESTS = 2

export function clampGuestCount(count: number): number {
  return Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, count))
}

interface GuestPickerProps {
  value: number
  onChange: (value: number) => void
  label?: string
  className?: string
}

export function GuestPicker({
  value,
  onChange,
  label = "Adults",
  className,
}: GuestPickerProps) {
  const count = clampGuestCount(value)

  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2 font-['Cinzel']">{label}</label>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 shrink-0"
          disabled={count <= MIN_GUESTS}
          onClick={() => onChange(count - 1)}
          aria-label="Decrease number of guests"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span
          className="min-w-[3rem] text-center text-lg font-semibold font-['Cinzel'] tabular-nums"
          aria-live="polite"
        >
          {count}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 shrink-0"
          disabled={count >= MAX_GUESTS}
          onClick={() => onChange(count + 1)}
          aria-label="Increase number of guests"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground font-['Cormorant_Garamond']">
        Maximum {MAX_GUESTS} guests per cabin
      </p>
    </div>
  )
}
