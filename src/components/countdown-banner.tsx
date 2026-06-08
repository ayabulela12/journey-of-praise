"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

const TARGET_TIMESTAMP = new Date("2027-03-08T14:00:00Z").getTime()

function calculateTimeLeft() {
  const now = Date.now()
  const distance = TARGET_TIMESTAMP - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="sticky top-20 z-40 bg-gradient-to-r from-accent via-secondary to-accent py-3 px-4 -mb-px border-none shadow-none">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-primary">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-['Cinzel'] font-semibold text-lg">Sailing Departure in:</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-2xl font-bold">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-2xl font-bold">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-2xl font-bold">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 min-w-[60px] text-center">
        <span className="text-2xl font-bold font-mono">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs font-['Cormorant_Garamond'] mt-1">{label}</span>
    </div>
  )
}
