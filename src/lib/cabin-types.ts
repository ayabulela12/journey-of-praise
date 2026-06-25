import { Bed, Coffee, Ship, type LucideIcon } from "lucide-react"

export const BASE_CABIN_AMENITIES = [
  "Twin beds convertible to queen",
  "Private bathroom",
  "Climate control",
  "Onboard dining & entertainment",
  "Insurance, port charges & Journey of Praise service fee",
  "Access to worship sessions and couple-focused moments",
  "Shipboard pools, fitness and relaxation spaces",
] as const

export interface CabinType {
  name: string
  price: string
  pricePerNight: string
  description: string
  icon: LucideIcon
  features: string[]
  capacity: string
  size: string
  badge: string | null
}

export const cabinTypes: CabinType[] = [
  {
    name: "Interior cabin",
    price: "R17 802",
    pricePerNight: "Per cabin, 2 adults",
    description: "Comfortable retreat space for couples",
    icon: Bed,
    features: [...BASE_CABIN_AMENITIES],
    capacity: "2 adults",
    size: "approx. 13-20 sq m",
    badge: null,
  },
  {
    name: "Ocean View",
    price: "R18 400",
    pricePerNight: "Per cabin, 2 adults",
    description: "Wake up to ocean views on your couples retreat",
    icon: Ship,
    features: [...BASE_CABIN_AMENITIES, "Scenic ocean-view window"],
    capacity: "2 adults",
    size: "approx. 12-20 sq m",
    badge: "Popular",
  },
  {
    name: "Balcony cabin",
    price: "R24 600",
    pricePerNight: "Per cabin, 2 adults",
    description: "Private balcony for sunset moments together",
    icon: Coffee,
    features: [...BASE_CABIN_AMENITIES, "Private balcony"],
    capacity: "2 adults",
    size: "approx. 13-17 sq m + balcony",
    badge: "Best for couples",
  },
]

export const makePlanSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

export function serializeCabinPlan(plan: CabinType) {
  const { icon: _icon, ...planData } = plan
  return planData
}

export function resolveCabinPlan(saved: { name?: string } | null): CabinType | null {
  if (!saved?.name) {
    return null
  }

  return cabinTypes.find((plan) => plan.name === saved.name) ?? null
}
