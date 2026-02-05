import { PageHeader } from "@/components/page-header"
import { HeadlinersSection } from "@/components/headliners-section"

export default function HeadlinersPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Artist Updates"
        title="Gospel Headliners"
        subtitle="Artist confirmations for our 2026 voyage are currently in progress."
      />
      <HeadlinersSection />
    </main>
  )
}
