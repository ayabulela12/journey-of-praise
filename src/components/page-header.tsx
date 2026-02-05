import { Badge } from "@/components/ui/badge"

export function PageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string
  subtitle?: string
  badge?: string
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/90 to-background -mt-px">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,182,86,0.20),transparent_55%)]" />
      <div className="container mx-auto px-4 pt-16 pb-14 md:pt-20 md:pb-16 relative">
        {badge ? (
          <div className="mb-4 flex justify-center">
            <Badge className="bg-accent text-accent-foreground border border-accent/30 px-4 py-1 font-['Cinzel'] text-sm">
              {badge}
            </Badge>
          </div>
        ) : null}

        <h1 className="text-center text-4xl md:text-6xl font-['Cinzel'] font-bold text-primary-foreground tracking-tight">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 text-center text-lg md:text-2xl text-primary-foreground/85 font-['Cormorant_Garamond'] max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  )
}
