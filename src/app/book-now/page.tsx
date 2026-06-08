"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { BookingCart } from "@/components/booking-cart"
import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"

interface CabinPlan {
  name: string
  price: string
  pricePerNight: string
  description: string
  icon: any
  features: string[]
  capacity: string
  size: string
  badge: string | null
}

const cabinPlans: CabinPlan[] = [
  {
    name: "Interior cabin",
    price: "R17 802",
    pricePerNight: "Per cabin, 2 adults",
    description: "Comfortable retreat space for couples",
    icon: "Bed",
    features: [
      "Twin beds convertible to queen",
      "Private bathroom",
      "Climate control",
      "Onboard dining & entertainment",
      "Insurance, port charges & Journey of Praise service fee",
      "Access to worship sessions and couple-focused moments",
      "Shipboard pools, fitness and relaxation spaces"
    ],
    capacity: "2 adults",
    size: "approx. 13-20 sq m",
    badge: null
  },
  {
    name: "Ocean View",
    price: "R18 400",
    pricePerNight: "Per cabin, 2 adults",
    description: "Wake up to ocean views on your couples retreat",
    icon: "Ship",
    features: [
      "All Interior cabin amenities",
      "Scenic ocean-view window",
      "Sitting area",
      "Mini refrigerator",
      "Insurance, port charges & Journey of Praise service fee",
      "Complimentary dining and daily specialty options",
      "Curated couple experiences and wellness access"
    ],
    capacity: "2 adults",
    size: "approx. 12-20 sq m",
    badge: "Popular"
  },
  {
    name: "Balcony cabin",
    price: "R24 600",
    pricePerNight: "Per cabin, 2 adults",
    description: "Private balcony for sunset moments together",
    icon: "Coffee",
    features: [
      "Private balcony",
      "All Ocean View amenities",
      "VIP couple experiences",
      "Insurance, port charges & Journey of Praise service fee",
      "Complimentary dining and daily specialty options",
      "Access to wellness, pools and relaxing shore experiences"
    ],
    capacity: "2 adults",
    size: "approx. 13-17 sq m + balcony",
    badge: "Best for couples"
  }
]

const makePlanSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

export default function BookNowPage() {
  const [selectedPlan, setSelectedPlan] = useState<CabinPlan | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [guests, setGuests] = useState({
    adults: 2,
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const planParam = urlParams.get('plan')
    const savedPlan = localStorage.getItem('selectedPlan')

    if (planParam) {
      const plan = cabinPlans.find(
        p => makePlanSlug(p.name) === planParam.toLowerCase()
      )

      if (plan) {
        setSelectedPlan(plan)
        localStorage.setItem('selectedPlan', JSON.stringify(plan))
        return
      }
    }

    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan))
    }
  }, [])

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Secure Booking"
        title="Reserve Your Cabin"
        subtitle="Complete your Journey of Praise cruise booking in just a few simple steps."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {!showForm ? (
              <BookingCart 
                selectedPlan={selectedPlan}
                onPlanSelect={(plan) => {
                  setSelectedPlan(plan)
                  // Save to localStorage immediately when plan is selected
                  localStorage.setItem('selectedPlan', JSON.stringify(plan))
                }}
                onContinue={() => setShowForm(true)}
                onGuestsChange={setGuests}
              />
            ) : (
              <BookingForm 
                selectedPlan={selectedPlan}
                onBack={() => setShowForm(false)}
              />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingSummary selectedPlan={selectedPlan} guests={guests} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
