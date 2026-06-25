"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, ArrowLeft, Copy, Check, Ship, Calendar, Users, Mail, Phone } from "lucide-react"
import { BookingSummary } from "@/components/booking-summary"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export default function EFTPaymentPage() {
  const [customerDetails, setCustomerDetails] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [guests, setGuests] = useState<any>(null)
  const [reference, setReference] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [isEmailLoading, setIsEmailLoading] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Get customer details, selected plan, and guests from localStorage
    const savedDetails = localStorage.getItem('customerDetails')
    const savedPlan = localStorage.getItem('selectedPlan')
    const savedGuests = localStorage.getItem('guests')
    
    if (savedDetails) {
      try {
        setCustomerDetails(JSON.parse(savedDetails))
      } catch (e) {
        console.error('Error parsing customer details:', e)
      }
    }
    
    if (savedPlan) {
      try {
        setSelectedPlan(JSON.parse(savedPlan))
      } catch (e) {
        console.error('Error parsing selected plan:', e)
      }
    }
    
    if (savedGuests) {
      try {
        setGuests(JSON.parse(savedGuests))
      } catch (e) {
        console.error('Error parsing guests data:', e)
      }
    }
  }, [])

  useEffect(() => {
    if (customerDetails && !reference) {
      const normalizedName = customerDetails.fullName?.replace(/\s/g, '').toUpperCase().substring(0, 10) || 'GUEST'
      setReference(`JOP-${normalizedName}-${Date.now().toString().slice(-6)}`)
    }
  }, [customerDetails, reference])

  // Keep only the essential banking details for the payer
  const bankDetails = {
    bankName: "FNB",
    accountName: "Journey of Praise Cruise",
    accountNumber: "63197397863",
    branchCode: "260214",
    reference: reference || `JOP-${customerDetails?.fullName?.replace(/\s/g, '').toUpperCase().substring(0, 10)}-${Date.now().toString().slice(-6)}`,
  }


  const totalAmount = selectedPlan 
    ? parseInt(selectedPlan.price.replace(/[^\d]/g, ''))
    : 0

  const handleConfirmBooking = async () => {
    if (isEmailLoading || !customerDetails || !selectedPlan || !guests || !reference) {
      return
    }

    setIsEmailLoading(true)
    setEmailError(null)

    try {
      const response = await fetch('/api/booking/confirm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerDetails,
          selectedPlan,
          guests,
          reference,
          totalAmount,
        }),
      })

      const contentType = response.headers.get('content-type') ?? ''
      if (!contentType.includes('application/json')) {
        throw new Error('Email service is unavailable. Please contact us directly.')
      }

      const result = await response.json()

      if (!response.ok || !result.success) {
        const message = result.error || 'Failed to send confirmation email'
        setEmailError(message)
        throw new Error(message)
      }

      setIsEmailDialogOpen(true)
    } catch (error: any) {
      console.error('Booking confirmation error:', error)
      if (!emailError) {
        setEmailError(error?.message || 'Unable to send the confirmation email. Please try again later.')
      }
    } finally {
      setIsEmailLoading(false)
    }
  }

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!customerDetails || !selectedPlan) {
    return (
      <main className="min-h-screen">
        <PageHeader
          badge="EFT Payment"
          title="Bank Transfer Details"
          subtitle="Please complete your booking details first"
        />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                No booking details found. Please go back to complete your booking.
              </p>
              <Button 
                onClick={() => router.push('/book-now')}
                className="mt-4 font-['Cinzel']"
              >
                Go to Booking Page
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="EFT Payment"
        title="Bank Transfer Details"
        subtitle="Complete your payment using the banking details below"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Back Button */}
            <Button 
              variant="ghost"
              onClick={() => router.push('/book-now')}
              className="font-['Cinzel']"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reserve Your Cabin
            </Button>

            {/* Booking Summary */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="font-['Cinzel'] text-xl">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold font-['Cinzel'] mb-2">Guest Information</h4>
                    <div className="space-y-1 text-sm font-['Cormorant_Garamond']">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{customerDetails.fullName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{customerDetails.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{customerDetails.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold font-['Cinzel'] mb-2">Cabin Details</h4>
                    <div className="space-y-1 text-sm font-['Cormorant_Garamond']">
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Details */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-linear-to-r from-primary to-secondary text-primary-foreground">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6" />
                  <CardTitle className="font-['Cinzel'] text-xl">Banking Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Bank Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond']">{bankDetails.bankName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.bankName, 'bankName')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'bankName' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  

                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond']">{bankDetails.accountName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.accountName, 'accountName')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'accountName' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.accountNumber, 'accountNumber')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'accountNumber' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Branch Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{bankDetails.branchCode}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.branchCode, 'branchCode')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'branchCode' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Reference:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{bankDetails.reference}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.reference, 'reference')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'reference' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="font-bold font-['Cinzel'] text-lg">Amount to Pay:</span>
                      <span className="font-['Cinzel'] text-2xl text-primary font-bold">
                        R{totalAmount.toLocaleString('en-ZA')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-['Cinzel'] text-accent mb-2 font-semibold">Important Instructions</h4>
                  <ul className="text-sm text-foreground/80 space-y-2 font-['Cormorant_Garamond']">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Please use the reference number above when making your payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Payment processing takes 2-3 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Once payment is received, you'll receive a confirmation email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Keep your proof of payment for your records</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <Button
                      onClick={handleConfirmBooking}
                      disabled={isEmailLoading}
                      className="w-full font-['Cinzel']"
                    >
                      {isEmailLoading ? 'Sending Email...' : 'Send Details to Email'}
                    </Button>
                  </div>
                  {emailError ? (
                    <div className="rounded-2xl bg-destructive/10 border border-destructive p-4 text-sm text-destructive">
                      {emailError}
                    </div>
                  ) : null}
                </div>

                <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                  <DialogContent className="border-2 border-primary">
                    <DialogHeader>
                      <DialogTitle className="font-['Cinzel'] text-2xl">
                        Your Booking is Confirmed – Journey of Praise Cruise
                      </DialogTitle>
                      <DialogDescription className="text-foreground/80">
                        A payment instruction email has been sent to {customerDetails.email || 'your email address'} with your bank transfer details and booking reference.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 p-4 bg-muted/50 rounded-xl border border-border">
                      <div className="text-sm text-foreground/90">
                        <p><strong>To:</strong> {customerDetails.email || 'your email address'}</p>
                        <p><strong>Cabin:</strong> {selectedPlan.name}</p>
                        <p><strong>Amount:</strong> R{totalAmount.toLocaleString('en-ZA')}</p>
                        <p><strong>Reference:</strong> {bankDetails.reference}</p>
                      </div>
                      <div className="rounded-2xl bg-background p-4 border border-border shadow-sm">
                        <p className="font-semibold text-sm text-foreground">Success! Your booking has been confirmed.</p>
                        <p className="text-sm text-foreground/70 mt-2">
                          A payment instruction email has been sent with your bank transfer details, reference and next steps.
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="font-['Cinzel']">Close</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
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
