import { PageHeader } from "@/components/page-header"
import { CruiseInfoSection } from "@/components/cruise-info-section"

export default function CruisePage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Voyage Details"
        title="Cruise Information"
        subtitle="A faith-filled 3-night journey from Durban to Cape Town aboard the magnificent MSC Armonia."
      />
      <CruiseInfoSection />
    </main>
  )
}
