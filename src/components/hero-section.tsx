"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage: `url("/images/hero-bg.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center px-4 text-center"
          >
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-['Cinzel_Decorative'] font-bold text-foreground mb-6"
        >
          Journey of Praise Cruise 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-['Cormorant_Garamond'] italic text-accent mb-8 max-w-2xl"
        >
          Recharge. Reconnect. Rejoice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4 font-['Cormorant_Garamond']">
            A Faith-Filled Journey at Sea for Families, Couples & Faith Communities.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-['Cormorant_Garamond']">
            This December, step into a different kind of holiday — one designed with purpose. Journey of Praise Cruise is South Africa’s premier faith-based family cruise experience, created for those who desire rest, a reconnection with God and loved ones, and a joyful celebration of faith.
          </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-4 font-['Cormorant_Garamond']">
              Sailing from 14–18 December 2026 aboard the elegant MSC Armonia, this inaugural Journey of Praise invites you into a sacred space at sea. Where worship, thanksgiving, and togetherness unfold naturally.
              <br />
              <span className="font-bold text-accent">Departure: 16:00 from Durban</span>
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg">
              <Link href="/pricing#enquire-form-button">Enquire Now</Link>
            </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg bg-background/50">
            <Link href="/pricing">Reserve Your Cabin</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-full px-8 h-12 text-lg">
            <Link href="/pricing#payment-plans">Start Your Payment Plan</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
