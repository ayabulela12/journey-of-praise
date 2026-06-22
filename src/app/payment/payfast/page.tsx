"use client"

import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PayFastPaymentPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="PayFast Unavailable"
        title="PayFast is currently hidden"
        subtitle="Please use EFT to complete your booking."
      />
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto border-2 border-border">
          <CardContent className="p-8 text-center space-y-6">
            <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg">
              PayFast is not available for this booking flow. The EFT payment option is active and ready to use.
            </p>
            <Button
              onClick={() => router.push('/book-now')}
              className="font-['Cinzel']"
            >
              Back to Reserve Your Cabin
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
