import { PageHeader } from "@/components/page-header"
import { PricingSection } from "@/components/pricing-section"
import { PaymentSection } from "@/components/payment-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Cabins & Booking"
        title="Pricing"
        subtitle="Compare cabin types, then reserve your spot through MSC Cruises' secure booking portal."
      />
      <PricingSection />
      <PaymentSection />
    </main>
  )
}
