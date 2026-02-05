import { PageHeader } from "@/components/page-header"
import { GallerySection } from "@/components/gallery-section"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Memories"
        title="Gallery"
        subtitle="A glimpse into the worship, fellowship, and adventures that await you on Journey of Praise."
      />
      <GallerySection />
    </main>
  )
}
