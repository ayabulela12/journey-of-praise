"use client"

import { motion } from "framer-motion"
import { Anchor, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description:
        "Every aspect of our cruise is designed to strengthen your spiritual journey and deepen your relationship with God.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join a welcoming community of believers for worship, fellowship, and meaningful connections that last beyond the voyage.",
    },
    {
      icon: Anchor,
      title: "Adventure",
      description:
        "Explore breathtaking destinations while experiencing the perfect blend of spiritual enrichment and exciting adventures.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
              Why the Journey of Praise Cruise Was Created
            </h2>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground/75 max-w-4xl mx-auto leading-relaxed font-['Cormorant_Garamond']">
                This Couples Cruise was created from a vision to give Christian couples intentional time away to reconnect with God, with each other, and with purpose.
              </p>
              <p className="text-xl md:text-2xl text-foreground/75 max-w-4xl mx-auto leading-relaxed font-['Cormorant_Garamond']">
              In a fast-paced world where relationships are often stretched by responsibility and routine, this experience creates space for rest, worship, love, conversation, and renewal at sea.
              </p>
              <div className="flex flex-col items-center justify-center space-y-2 mt-8">
                <p className="text-2xl md:text-3xl font-['Cinzel'] font-semibold text-accent italic">
                  This is not a party cruise.
                </p>
                <p className="text-2xl md:text-3xl font-['Cinzel'] font-semibold text-accent italic">
                  It is not just a getaway.
                </p>
                <p className="text-3xl md:text-4xl font-['Cinzel'] font-bold text-primary mt-2 uppercase tracking-widest">
                  This is a journey of faith, love, and intentional connection.
                </p>
              </div>
            </div>
          </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-2 border-border hover:border-accent transition-all duration-300 h-full hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/90 rounded-full mb-6">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-['Cinzel'] font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed font-['Cormorant_Garamond'] text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
