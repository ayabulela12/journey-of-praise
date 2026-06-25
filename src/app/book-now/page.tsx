"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { BookingCart } from "@/components/booking-cart"
import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"
import { cabinTypes, makePlanSlug, resolveCabinPlan, serializeCabinPlan, type CabinType } from "@/lib/cabin-types"

export default function BookNowPage() {
  const [selectedPlan, setSelectedPlan] = useState<CabinType | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [guests, setGuests] = useState({
    adults: 2,
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const planParam = urlParams.get('plan')
    const savedPlan = localStorage.getItem('selectedPlan')

    if (planParam) {
      const plan = cabinTypes.find(
        p => makePlanSlug(p.name) === planParam.toLowerCase()
      )

      if (plan) {
        setSelectedPlan(plan)
        try {
          localStorage.setItem('selectedPlan', JSON.stringify(serializeCabinPlan(plan)))
        } catch (error) {
          console.warn('Unable to save selected plan to localStorage', error)
        }
        return
      }
    }

    if (savedPlan) {
      try {
        const parsed = JSON.parse(savedPlan)
        setSelectedPlan(resolveCabinPlan(parsed))
      } catch (error) {
        console.error('Error parsing saved selected plan:', error)
        localStorage.removeItem('selectedPlan')
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Secure Booking"
        title="Reserve Your Cabin"
        subtitle="Complete your Journey of Praise cruise booking in just a few simple steps."
      />

      <div className="container mx-auto px-4 pb-4 -mt-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-accent/30 bg-accent/10 p-4 text-center">
          <p className="font-['Cinzel'] text-accent font-semibold">
            Minimum deposit of R3,000 required to secure your cabin.
          </p>
          <p className="mt-1 text-sm text-foreground/80 font-['Cormorant_Garamond']">
            50% off drinks packages available as an optional add-on.
          </p>
        </div>
      </div>
      
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
                  try {
                    localStorage.setItem('selectedPlan', JSON.stringify(serializeCabinPlan(plan)))
                  } catch (error) {
                    console.warn('Unable to save selected plan to localStorage', error)
                  }
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
