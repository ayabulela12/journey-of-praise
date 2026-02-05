import { PageHeader } from "@/components/page-header"
import { BookingForm } from "@/components/booking-form"

export default function BookNowPage() {
  return (
    <main className="min-h-screen pb-24">
      <PageHeader
        badge="Booking & Enquiry"
        title="Secure Your Cabin"
        subtitle="Complete the form below to register your interest and start your booking process for the Journey of Praise 2026."
      />
      <div className="container mx-auto px-4 mt-12">
        <BookingForm />
      </div>
    </main>
  )
}
