"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DestinationsSection() {
  const destinations = [
    {
      name: "Caribbean Islands",
      description:
        "Crystal-clear waters, pristine beaches, and vibrant cultures. Visit historic churches and enjoy tropical paradise.",
      highlights: ["St. Thomas", "Grand Cayman", "Cozumel", "Nassau"],
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    },
    {
      name: "Mediterranean",
      description:
        "Walk in the footsteps of biblical history. Explore ancient sites, sacred landmarks, and cultural treasures.",
      highlights: ["Greece", "Israel", "Turkey", "Italy"],
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80",
    },
    {
      name: "Alaska",
      description:
        "Witness God's majestic creation through glaciers, wildlife, and breathtaking natural wonders.",
      highlights: ["Juneau", "Skagway", "Ketchikan", "Glacier Bay"],
      image:
        "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=80",
    },
    {
      name: "Holy Land",
      description:
        "Experience a life-changing journey to Jerusalem, Bethlehem, and other sacred biblical sites.",
      highlights: ["Jerusalem", "Bethlehem", "Nazareth", "Dead Sea"],
      image:
        "https://images.unsplash.com/photo-1590517220999-46b7b8407460?w=1200&q=80",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Destinations
          </h2>
          <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Sail to breathtaking locations and experience God's creation in stunning settings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 h-full group hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="text-3xl font-['Cinzel'] font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-foreground/80 leading-relaxed font-['Cormorant_Garamond'] text-lg mb-4">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="secondary"
                        className="bg-secondary/15 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-['Cormorant_Garamond'] text-base px-3 py-1"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
