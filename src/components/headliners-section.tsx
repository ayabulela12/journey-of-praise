"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Calendar } from "lucide-react"

export function HeadlinersSection() {
  return (
    <section id="headliners" className="py-24 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
            <Music className="w-4 h-4 mr-2 inline" />
            Artist Lineup
          </Badge>
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Artist Confirmations
          </h2>
          <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            We are currently finalizing our incredible lineup of gospel artists and ministry leaders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-dashed border-accent/30 bg-accent/5 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <Calendar className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-['Cinzel'] font-bold text-foreground mb-4">
                Coming Soon
              </h3>
              <p className="text-2xl text-foreground/80 font-['Cormorant_Garamond'] italic leading-relaxed">
                "Headliners page is awaiting artist confirmations"
              </p>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-lg text-foreground/60 font-['Cormorant_Garamond']">
                  Please check back soon for the official announcement of our 2026 Gospel Headliners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-secondary/10 border-2 border-secondary rounded-xl p-8 max-w-2xl">
            <Music className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-['Cinzel'] font-semibold text-foreground mb-3">
              An Unforgettable Worship Experience
            </h3>
            <p className="text-foreground/75 font-['Cormorant_Garamond'] text-lg">
              Regardless of the final lineup, Journey of Praise promises daily worship services, 
              inspiring concerts, and powerful ministry sessions that will enrich your soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
