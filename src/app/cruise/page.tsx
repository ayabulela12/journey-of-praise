import { PageHeader } from "@/components/page-header"
import { CruiseInfoSection } from "@/components/cruise-info-section"

export default function CruisePage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Voyage Details"
        title="Cruise Information"
          subtitle="A faith-filled 4-night journey to Pomene Island, Mozambique aboard the magnificent MSC Armonia."

      />
      <CruiseInfoSection />
    </main>
  )
}
