import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, AlertCircle } from "lucide-react"

export default function FlightsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Travel Packages"
        title="Flights & Travel Packages"
        subtitle="Current status of flight-inclusive travel options for the Journey of Praise 2026."
      />
      
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-primary/5 p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Plane className="w-64 h-64 -rotate-45" />
            </div>
            
            <div className="relative z-10">
              <Badge className="bg-primary text-primary-foreground mb-6 px-4 py-1 text-base font-['Cinzel']">
                <AlertCircle className="w-4 h-4 mr-2 inline" />
                Important Information
              </Badge>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-['Cinzel'] font-bold text-foreground mb-4">
                    Flights & Travel Packages
                  </h2>
                  <p className="text-2xl md:text-3xl font-['Cormorant_Garamond'] text-foreground/90 leading-relaxed italic">
                    All current cruise prices are flight-exclusive.
                  </p>
                </div>

                <div className="h-0.5 w-full bg-border/50" />

                <p className="text-xl md:text-2xl text-foreground/80 font-['Cormorant_Garamond'] leading-relaxed">
                  Flight-inclusive packages from Cape Town, Johannesburg, Gqeberha, and East London are being finalised with airline partners and will be announced soon.
                </p>

                <div className="pt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-['Cinzel'] text-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
