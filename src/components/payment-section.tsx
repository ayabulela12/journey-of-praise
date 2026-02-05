"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CreditCard, ExternalLink, CheckCircle, Calendar, Clock } from "lucide-react"

export function PaymentSection() {
    return (
      <section id="payment-plans" className="py-24 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
              <CreditCard className="w-4 h-4 mr-2 inline" />
              Easy Planning
            </Badge>
            <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
              Family-Friendly Payment Plans
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed">
                We understand that meaningful holidays are planned, not rushed. That’s why Journey of Praise Cruise offers flexible payment options to make this faith-filled journey accessible for everyone.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-border hover:border-accent transition-all duration-300">
              <CardHeader className="text-center pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-['Cinzel'] text-foreground mb-2">
                  Secure Early
                </CardTitle>
                <p className="text-foreground/70 font-['Cormorant_Garamond'] text-lg">
                  Secure your cabin early to get the best choice of location and pricing.
                </p>
              </CardHeader>
            </Card>

            <Card className="border-2 border-accent shadow-xl scale-105 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                Flexible
              </Badge>
              <CardHeader className="text-center pt-8">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-['Cinzel'] text-foreground mb-2">
                  Instalments
                </CardTitle>
                <p className="text-foreground/70 font-['Cormorant_Garamond'] text-lg">
                  Pay in manageable monthly instalments that fit your family's budget.
                </p>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-accent transition-all duration-300">
              <CardHeader className="text-center pt-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-['Cinzel'] text-foreground mb-2">
                  75-Day Grace
                </CardTitle>
                <p className="text-foreground/70 font-['Cormorant_Garamond'] text-lg">
                  Final balance is only due 75 days before our December departure.
                </p>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5 mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-['Cinzel'] font-bold text-foreground mb-6">
                  Designed for South African Families
                </h3>
                <p className="text-xl text-foreground/75 font-['Cormorant_Garamond'] mb-8 leading-relaxed">
                  Whether you're travelling from <span className="text-primary font-semibold">Gauteng</span>, <span className="text-primary font-semibold">KwaZulu-Natal</span>, the <span className="text-primary font-semibold">Eastern Cape</span>, or the <span className="text-primary font-semibold">Western Cape</span>, our payment plans are designed to help you plan with peace of mind.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/book-now">
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-['Cinzel'] text-lg px-12 py-7 rounded-full"
                    >
                      Enquire About Payment Plans
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-24 pt-12 border-t-2 border-border/50 text-center">
            <h3 className="text-3xl font-['Cinzel'] font-bold text-foreground mb-8">Terms & Conditions</h3>
            <div className="max-w-2xl mx-auto p-8 border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-white rounded-xl shadow-md">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground/80 font-['Cormorant_Garamond'] text-lg mb-4">
                  Download the Journey of Praise 2026 Cruise Terms and Conditions.
                </p>
                <Button variant="outline" className="font-['Cinzel'] border-primary text-primary hover:bg-primary hover:text-white">
                  Download PDF (T&Cs)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
