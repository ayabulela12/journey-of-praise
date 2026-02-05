"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-['Cinzel'] uppercase tracking-wider">Limited Availability</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-['Cinzel'] font-bold mb-6">
            Book Your Place on the Journey of Praise
          </h2>
          
          <p className="text-xl md:text-2xl font-['Cormorant_Garamond'] mb-4 text-primary-foreground/90">
            Cabins are limited, and December sailings fill quickly.
          </p>
          
          <p className="text-lg md:text-xl font-['Cormorant_Garamond'] mb-12 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Join families and faith communities from across South Africa on a journey designed to restore, reconnect, and uplift.
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-['Cinzel'] shadow-xl hover:scale-105 hover:bg-secondary transition-transform">
                  <Link href="/pricing#enquire-form-button">Enquire Now</Link>
                </Button>
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-['Cinzel'] bg-accent text-accent-foreground shadow-xl hover:scale-105 hover:bg-accent transition-transform border-none">
                <Link href="/pricing">Reserve Your Cabin</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-['Cinzel'] shadow-xl hover:scale-105 hover:bg-secondary transition-transform">
                <Link href="/pricing#payment-plans">Start Payment Plan</Link>
              </Button>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
