import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Ship, Anchor, Clock, Info } from "lucide-react"

const itinerary = [
  {
    day: "Monday - Departure Day",
    date: "8 March 2027",
    port: "Durban, South Africa",
    arrival: "—",
    departure: "16:00"
  },
  {
    day: "Tuesday - At Sea",
    date: "9 March 2027",
    port: "At Sea",
    arrival: "—",
    departure: "—"
  },
  {
    day: "Wednesday - At Sea",
    date: "10 March 2027",
    port: "At Sea",
    arrival: "—",
    departure: "—"
  },
  {
    day: "Thursday - Arrival Day",
    date: "11 March 2027",
    port: "Cape Town, South Africa",
    arrival: "06:00",
    departure: "—"
  }
]

const shipFeatures = [
  {
    icon: Ship,
    title: "MSC Armonia",
    description: "Elegant and magnificent vessel chosen for rest and joy"
  },
  {
    icon: Anchor,
    title: "South Africa Route",
    description: "Unforgettable 3-night voyage from Durban to Cape Town"
  },
  {
    icon: Clock,
    title: "20h Dining",
    description: "Complimentary dining options open up to 20 hours daily"
  }
]

export function CruiseInfoSection() {
  return (
    <section id="cruise-info" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
            <Ship className="w-4 h-4 mr-2 inline" />
            Faith at Sea
          </Badge>
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Faith at Sea. Comfort All Around.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed">
              Journey of Praise Cruise combines the warmth of worship with the comfort of a world-class cruise experience. Join us aboard the magnificent MSC Armonia for an unforgettable 3-night journey from Durban to Cape Town of faith, fellowship, and inspiration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-lg font-['Cormorant_Garamond']">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Complimentary dining options open up to 20 hours daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Fine dining experiences in selected restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Theatre shows, live music, social lounges & curated entertainment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Wellness facilities including gym, pools, jacuzzis & solarium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Sports courts, shopping areas & 24-hour room service</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-foreground/60 italic font-['Cormorant_Garamond'] mt-4">
              Every space onboard has been chosen to support rest, reconnection, and joy — without compromise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {shipFeatures.map((feature, index) => (
            <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-['Cinzel'] text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/75 font-['Cormorant_Garamond'] text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-['Cinzel'] font-bold text-foreground mb-4">
              A March Journey to Remember
            </h3>
            <p className="text-2xl text-primary font-semibold font-['Cinzel'] mb-2">
              Durban → Cape Town
            </p>
            <p className="text-lg text-foreground/60 font-['Cormorant_Garamond']">
              Every day has been intentionally designed to balance worship, rest, and joyful exploration.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-sm">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-primary/5 text-foreground/80">
                <tr>
                  <th className="px-6 py-4 font-['Cinzel'] text-base uppercase tracking-wide">Day</th>
                  <th className="px-6 py-4 font-['Cinzel'] text-base uppercase tracking-wide">Date</th>
                  <th className="px-6 py-4 font-['Cinzel'] text-base uppercase tracking-wide">Port</th>
                  <th className="px-6 py-4 font-['Cinzel'] text-base uppercase tracking-wide">Arrival</th>
                  <th className="px-6 py-4 font-['Cinzel'] text-base uppercase tracking-wide">Departure</th>
                </tr>
              </thead>
              <tbody>
                {itinerary.map((day, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-white"}>
                    <td className="px-6 py-5 align-top font-semibold text-foreground">{day.day}</td>
                    <td className="px-6 py-5 align-top text-foreground/80">{day.date}</td>
                    <td className="px-6 py-5 align-top text-foreground/80">{day.port}</td>
                    <td className="px-6 py-5 align-top text-foreground/80">{day.arrival}</td>
                    <td className="px-6 py-5 align-top text-foreground/80">{day.departure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-4 text-sm text-foreground/60 italic">*Itinerary subject to port availability.</p>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                    Inclusions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-['Cormorant_Garamond'] text-xl text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>All Journey of Praise programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Insurance & port charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Complimentary dining & daily fine dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Fitness facilities, pools & hot tubs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Worded worship & couple entertainment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Selected sporting activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Port transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>50% off drinks packages (optional add-on)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Room service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                    Exclusions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-['Cormorant_Garamond'] text-xl text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Flights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Specialty dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Spa treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Drinks packages (50% off available)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Internet packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Personal shopping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        </div>
    </section>
  )
}
