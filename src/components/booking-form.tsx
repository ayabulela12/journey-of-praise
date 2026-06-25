"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, Ship } from "lucide-react"
import { useRouter } from "next/navigation"
import { GuestPicker, clampGuestCount } from "@/components/guest-picker"
import { sanitizePhoneInput, phoneValidationMessage } from "@/lib/phone"
import { normalizeEmailInput, emailValidationMessage } from "@/lib/email"
import { nameValidationMessage } from "@/lib/name"

interface BookingFormProps {
  selectedPlan: any
  onBack: () => void
}

export function BookingForm({ selectedPlan, onBack }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    adults: 2,
    message: ""
  })
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [nameError, setNameError] = useState<string | null>(null)
  const router = useRouter()

  // Load guests data from localStorage on mount
  useEffect(() => {
    const savedGuests = localStorage.getItem('guests')
    if (savedGuests) {
      try {
        const guests = JSON.parse(savedGuests)
        // Update formData with guests info
        setFormData(prev => ({
          ...prev,
          adults: clampGuestCount(guests.adults || prev.adults),
        }))
      } catch (e) {
        console.error('Error parsing guests data:', e)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = formData.fullName.trim()
    const normalizedEmail = normalizeEmailInput(formData.email)
    const nameMessage = nameValidationMessage(trimmedName)
    const emailMessage = emailValidationMessage(normalizedEmail)
    const phoneMessage = phoneValidationMessage(formData.phone)

    setNameError(nameMessage)
    setEmailError(emailMessage)
    setPhoneError(phoneMessage)

    if (nameMessage || emailMessage || phoneMessage) {
      return
    }

    const validatedDetails = {
      ...formData,
      fullName: trimmedName,
      email: normalizedEmail,
    }
    
    try {
      localStorage.setItem('customerDetails', JSON.stringify(validatedDetails))
    } catch (error) {
      console.warn('Unable to save customer details to localStorage', error)
    }
    
    // Ensure selectedPlan is also saved to localStorage (in case it wasn't saved earlier)
    if (selectedPlan) {
      try {
        localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan))
      } catch (error) {
        console.warn('Unable to save selected plan to localStorage', error)
      }
    }
    
    // Update guests data and save adults only
    const savedGuests = localStorage.getItem('guests')
    let guests
    if (savedGuests) {
      try {
        guests = JSON.parse(savedGuests)
        guests.adults = formData.adults
      } catch (e) {
        guests = {
          adults: formData.adults,
        }
      }
    } else {
      guests = {
        adults: formData.adults,
      }
    }
    try {
      localStorage.setItem('guests', JSON.stringify(guests))
    } catch (error) {
      console.warn('Unable to save guest count to localStorage', error)
    }
    
    // Redirect directly to the EFT payment page since this is the only payment option
    router.push('/payment/eft')
  }

  return (
    <div id="enquire" className="max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="p-2 h-8 w-8"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="font-['Cinzel'] text-lg text-muted-foreground">Select Cabin</span>
          </div>
        </div>
        <div className="flex-1 h-px bg-border mx-4"></div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="font-['Cinzel'] text-lg">Guest Details</span>
        </div>
      </div>

      <Card className="border-2 border-border shadow-2xl overflow-hidden">
        {/* Selected Plan Header */}
        {selectedPlan && (
          <div className="bg-linear-to-r from-primary to-secondary p-6 text-primary-foreground">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-['Cinzel'] font-bold">Guest Information</h3>
              {selectedPlan.badge && (
                <Badge className="bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                  {selectedPlan.badge}
                </Badge>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4" />
                <span>{selectedPlan.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{selectedPlan.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>8-11 March 2027</span>
              </div>
            </div>
            <div className="mt-2 text-xl font-['Cinzel'] font-bold">
              {selectedPlan.price}
            </div>
          </div>
        )}
        
        <CardContent className="p-8">
          <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your full name"
                  required
                  value={formData.fullName}
                  onChange={(e) => {
                    const fullName = e.target.value
                    setFormData(prev => ({ ...prev, fullName }))
                    if (nameError) {
                      setNameError(nameValidationMessage(fullName))
                    }
                  }}
                  onBlur={() => setNameError(nameValidationMessage(formData.fullName))}
                  aria-invalid={nameError ? true : undefined}
                  aria-describedby={nameError ? "name-error" : undefined}
                />
                {nameError ? (
                  <p id="name-error" className="text-sm text-destructive">
                    {nameError}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  className="w-full p-3 border rounded-md"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    const email = e.target.value
                    setFormData(prev => ({ ...prev, email }))
                    if (emailError) {
                      setEmailError(emailValidationMessage(email))
                    }
                  }}
                  onBlur={() => setEmailError(emailValidationMessage(formData.email))}
                  aria-invalid={emailError ? true : undefined}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError ? (
                  <p id="email-error" className="text-sm text-destructive">
                    {emailError}
                  </p>
                ) : null}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium font-['Cinzel']" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                className="w-full p-3 border rounded-md font-mono tracking-wide"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="0821234567"
                required
                minLength={10}
                maxLength={10}
                pattern="0[0-9]{9}"
                value={formData.phone}
                onKeyDown={(e) => {
                  if (e.key.length === 1 && !/\d/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                onChange={(e) => {
                  const phone = sanitizePhoneInput(e.target.value)
                  setFormData(prev => ({ ...prev, phone }))
                  if (phoneError && phone) {
                    setPhoneError(phoneValidationMessage(phone))
                  }
                }}
                onBlur={() => {
                  if (formData.phone) {
                    setPhoneError(phoneValidationMessage(formData.phone))
                  }
                }}
                aria-invalid={phoneError ? true : undefined}
                aria-describedby={phoneError ? "phone-error" : "phone-hint"}
              />
              <p id="phone-hint" className="text-xs text-muted-foreground font-['Cormorant_Garamond']">
                10 digits only, starting with 0 (e.g. 0821234567)
              </p>
              {phoneError ? (
                <p id="phone-error" className="text-sm text-destructive">
                  {phoneError}
                </p>
              ) : null}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <GuestPicker
                label="Number of Adults *"
                value={formData.adults}
                onChange={(adults) =>
                  setFormData(prev => ({ ...prev, adults: clampGuestCount(adults) }))
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-['Cinzel']">Special Requirements or Message</label>
              <textarea 
                className="w-full p-3 border rounded-md h-24" 
                placeholder="Tell us about any special requirements, dietary needs, or questions you may have..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <h4 className="font-['Cinzel'] text-accent mb-2">Important Information</h4>
              <ul className="text-sm text-foreground/80 space-y-1 font-['Cormorant_Garamond']">
                <li>• All prices include cruise fare, insurance, and port taxes</li>
                <li>• A minimum deposit of R3,000 is required to secure your cabin</li>
                <li>• 50% off drinks packages available as an optional add-on</li>
                <li>• You will receive a confirmation email with next steps</li>
                <li>• Journey of Praise programmes are included in all cabins</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                type="button"
                variant="outline"
                onClick={onBack}
                className="flex-1 py-3 font-['Cinzel']"
              >
                Back to Cabin Selection
              </Button>
              <Button 
                id="enquire-form-button" 
                className="flex-1 py-3 font-['Cinzel']" 
                type="submit"
              >
                Proceed to Bank Transfer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
