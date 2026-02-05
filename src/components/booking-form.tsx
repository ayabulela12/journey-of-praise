"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BookingForm() {
  return (
    <div id="enquire" className="max-w-4xl mx-auto">
      <Card className="border-2 border-border shadow-2xl overflow-hidden">
        <div className="bg-primary p-6 text-center">
          <h3 className="text-2xl font-['Cinzel'] text-primary-foreground font-bold">Booking Enquiry</h3>
          <p className="text-primary-foreground/80 font-['Cormorant_Garamond']">As payment details are still being finalised with MSC, please leave your details below.</p>
        </div>
        <CardContent className="p-8">
          <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Full Name</label>
                <input className="w-full p-3 border rounded-md" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Email Address</label>
                <input className="w-full p-3 border rounded-md" type="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Phone Number</label>
                <input className="w-full p-3 border rounded-md" type="tel" placeholder="Enter your phone" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Preferred Cabin</label>
                <select className="w-full p-3 border rounded-md bg-white">
                  <option>Interior Cabin</option>
                  <option>Ocean View</option>
                  <option>Junior Balcony</option>
                  <option>Balcony Suite</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium font-['Cinzel']">Message (Optional)</label>
              <textarea className="w-full p-3 border rounded-md h-32" placeholder="Tell us more about your group or special requirements"></textarea>
            </div>
            <Button id="enquire-form-button" className="w-full py-6 text-lg font-['Cinzel']" size="lg" type="submit">
              Submit Enquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
