"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Users } from "lucide-react"
import { GuestPicker, clampGuestCount } from "@/components/guest-picker"
import { cabinTypes } from "@/lib/cabin-types"

interface BookingCartProps {
  selectedPlan: any
  onPlanSelect: (plan: any) => void
  onContinue: () => void
  onGuestsChange: (guests: any) => void
}

export function BookingCart({ selectedPlan, onPlanSelect, onContinue, onGuestsChange }: BookingCartProps) {
  const [guests, setGuests] = useState({
    adults: 2,
  })

  // Update parent component when guests change
  const updateGuests = (adults: number) => {
    const newGuests = { adults: clampGuestCount(adults) }
    setGuests(newGuests)
    onGuestsChange(newGuests)
    try {
      localStorage.setItem('guests', JSON.stringify(newGuests))
    } catch (error) {
      console.warn('Unable to save guest details to localStorage', error)
    }
  }

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            1
          </div>
          <span className="font-['Cinzel'] text-lg">Select Cabin</span>
        </div>
        <div className="flex-1 h-px bg-border mx-4"></div>
        <div className="flex items-center space-x-4 opacity-50">
          <div className="w-8 h-8 bg-border text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="font-['Cinzel'] text-lg text-muted-foreground">Guest Details</span>
        </div>
      </div>

      {/* Guest Selection */}
      <Card className="border-2 border-border">
        <CardHeader>
          <CardTitle className="font-['Cinzel'] text-2xl">Number of Guests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <GuestPicker
              value={guests.adults}
              onChange={updateGuests}
            />
          </div>
          
          
          <p className="text-sm text-muted-foreground">
            Total guests: {guests.adults}
            <span className="block mt-2 text-lg font-bold text-primary">
              Full Amount: R{parseInt(selectedPlan?.price?.replace(/[^\d]/g, '') || '0')}
            </span>
          </p>
        </CardContent>
      </Card>

      {/* Cabin Selection */}
      <div>
        <h3 className="text-2xl font-['Cinzel'] font-bold mb-6">Choose Your Cabin</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {cabinTypes.map((cabin, index) => {
            const Icon = cabin.icon
            const isSelected = selectedPlan?.name === cabin.name
            
            return (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "border-accent shadow-xl scale-105" 
                    : "border-border hover:border-accent hover:shadow-xl"
                }`}
                onClick={() => onPlanSelect(cabin)}
              >
                <CardHeader className="relative">
                  {cabin.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                      {cabin.badge}
                    </Badge>
                  )}
                  <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-['Cinzel'] text-center text-foreground leading-tight">
                    {cabin.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-['Cinzel'] mb-1">
                      {cabin.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {cabin.pricePerNight}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Users className="w-4 h-4" />
                      <span>{cabin.capacity}</span>
                    </div>
                    <div className="text-sm text-foreground/70">
                      {cabin.size}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {cabin.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {isSelected && (
                    <div className="text-center text-sm text-accent font-semibold">
                      ✓ Selected
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <Button 
          onClick={onContinue}
          disabled={!selectedPlan}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-['Cinzel'] text-base px-8 py-3"
        >
          Continue to Guest Details
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
