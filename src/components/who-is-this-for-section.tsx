"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Heart, Users, Shield, Baby } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhoIsThisForSection() {
  const categories = [
    {
      icon: Users,
      title: "Families",
      description: "Seeking a safe, faith-aligned December holiday with purpose."
    },
    {
      icon: Heart,
      title: "Couples",
      description: "Longing for rest, reconnection, and spiritual renewal together."
    },
    {
      icon: Shield,
      title: "Church Groups",
      description: "Ministries wanting shared worship experiences at sea."
    },
    {
      icon: Baby,
      title: "Parents",
      description: "Value meaning and safety. Kids travel free (conditions apply)."
    }
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Who Is the Journey of Praise For?
          </h2>
          <p className="text-xl md:text-2xl text-accent font-['Cinzel'] italic mb-8">
            If your heart longs for more than a typical holiday, this journey is for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-border hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-['Cinzel'] font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-['Cormorant_Garamond'] text-lg">
                    {item.description}
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
