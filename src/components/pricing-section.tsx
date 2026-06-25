"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Users } from "lucide-react"
import { cabinTypes } from "@/lib/cabin-types"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Cabin Options & Pricing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond']">
              Designed for a couples retreat, every cabin is priced for two adults and crafted for meaningful rest together.
            </p>
            <p className="text-lg text-primary font-semibold font-['Cinzel']">
              All prices include port charges, insurance, and the Journey of Praise service fee.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cabinTypes.map((cabin, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 h-full flex flex-col ${
                cabin.badge === "Premium" 
                  ? "border-accent shadow-xl scale-105" 
                  : "border-border hover:border-accent hover:shadow-xl"
              }`}
            >
              <CardHeader className="relative">
                {cabin.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                    {cabin.badge}
                  </Badge>
                )}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                  <cabin.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-['Cinzel'] text-center text-foreground leading-tight">
                  {cabin.name}
                </CardTitle>
                <CardDescription className="text-center font-['Cormorant_Garamond'] text-base mt-2">
                  {cabin.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary font-['Cinzel'] mb-1">
                    {cabin.price}
                  </div>
                  <div className="text-sm text-muted-foreground font-['Cormorant_Garamond']">
                    {cabin.pricePerNight}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Users className="w-4 h-4" />
                    <span className="font-['Cormorant_Garamond']">{cabin.capacity}</span>
                  </div>
                  <div className="text-sm text-foreground/70 font-['Cormorant_Garamond']">
                    {cabin.size}
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm font-['Cormorant_Garamond'] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                  <Link href={`/book-now?plan=${encodeURIComponent(cabin.name.toLowerCase().replace(/\s+/g, '-'))}`} className="w-full">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-['Cinzel'] text-base mt-auto"
                    >
                      Book Now
                    </Button>
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-foreground/60 font-['Cormorant_Garamond'] text-lg">
            * All prices are per cabin for two adults and include port charges, insurance, and the Journey of Praise service fee.
          </p>
          <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
            <h4 className="text-xl font-['Cinzel'] text-accent mb-2">Couples Retreat Pricing</h4>
            <p className="text-foreground/80 font-['Cormorant_Garamond'] text-lg">
              Every cabin option is designed for two adults and built around a faith-focused couples retreat experience.
            </p>
          </div>
          <div className="p-6 bg-muted/50 rounded-xl border border-border">
            <h4 className="text-xl font-['Cinzel'] text-foreground mb-2">Important Note on Bookings</h4>
            <p className="text-foreground/80 font-['Cormorant_Garamond'] text-lg">
              Payment details are still being finalised with MSC. Please reserve your cabin to be notified as soon as payment plans are active.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
