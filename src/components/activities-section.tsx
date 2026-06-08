"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CreditCard, Heart, Music, Play, Shield, Sparkles, Users2 } from "lucide-react"

export function ActivitiesSection() {
    const activities = [
      {
        icon: Music,
        title: "Praise & Worship",
        description:
          "Purpose-led praise & worship sessions at sea with leading gospel artists.",
        image:
          "/images/JOP_Praise%20Worship.webp",
      },
      {
        icon: Heart,
        title: "Dedicated Program",
        description:
          "A dedicated program for couples to reconnect and grow together in faith.",
        image:
          "/images/JOP_ThanksGivingServices.webp",
      },
      {
        icon: Users2,
        title: "Community & Fellowship",
        description:
          "Connect with a like-minded community of believers in an environment of shared faith.",
        image:
          "/images/JOP_Community%26Fellowship.webp",
      },
      {
        icon: Shield,
        title: "Safe & Uplifting",
        description:
          "A safe, uplifting environment crafted for couples seeking meaningful rest and spiritual renewal.",
        image:
          "/images/JOP_Safe%26Uplifting.webp",
      },
      {
        icon: Sparkles,
        title: "Premium Amenities",
        description: "Premium cruise amenities blended with spiritual depth.",
        image:
          "/images/JOP_PremiumAmenities.webp",
      },
      {
        icon: CreditCard,
        title: "Flexible Payments",
        description: "Flexible payment options that make planning accessible.",
        image:
          "/images/JOP_FlexiblePayments.webp",
      },
    ]

    return (
      <section className="py-24 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
              Why Choose Journey of Praise
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-2xl md:text-3xl font-['Cinzel'] text-primary font-semibold italic">
                A Cruise with Meaning
              </p>
              <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed">
                Journey of Praise Cruise stands apart because it offers something rare: a faith-safe, couple-centred, culturally relevant cruise experience created specifically for South Africans.
              </p>
            </div>
          </motion.div>

          {/* Experience the Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-foreground mb-6">
                Experience the Journey
              </h3>
              <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed max-w-4xl mx-auto">
                Step aboard our magnificent MSC cruise liner and discover a world where luxury meets faith. 
                From elegant dining venues and serene spa areas to vibrant entertainment spaces and comfortable 
                staterooms, every corner of our ship is designed to elevate your spiritual journey. 
                Experience the perfect blend of world-class amenities and soul-enriching fellowship.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XtlQJZEWKCY"
                    title="Journey of Praise Cruise"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-foreground mb-6">
                Activities & Amenities
              </h3>
              <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed max-w-4xl mx-auto">
                Discover the carefully curated experiences that make Journey of Praise truly special. 
                Each activity is designed to nurture your faith while enjoying the luxury of a world-class cruise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 h-full group hover:shadow-2xl p-0 flex flex-col gap-0">
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3">
                    <activity.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="text-2xl font-['Cinzel'] font-semibold text-foreground mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed font-['Cormorant_Garamond'] text-lg">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
          </motion.div>
      </div>
    </section>
  )
}
