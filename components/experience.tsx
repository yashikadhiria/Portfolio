import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, CheckCircle } from "lucide-react"

type Labels = typeof import("@/data/labels.json")

type ExperienceItem = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export function Experience({
  id,
  labels,
  experiences,
  title,
}: {
  id: string
  labels: Labels
  experiences: ExperienceItem[]
  title: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 id={`${id}-title`} className="text-4xl md:text-5xl font-bold text-balance mb-4 ">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{labels.experience.subtitle}</p>
      </div>

      <div className="space-y-8">
        {experiences.map((e, i) => (
          <Card key={i} className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-3">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors font-manrope">
                    {e.role}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-md">
                      <Building2 className="size-4 text-primary" />
                    </div>
                    <span className="font-medium">{e.company}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit border-primary/30 text-primary hover:bg-primary/10 transition-colors">
                  <Calendar className="size-3 mr-2" />
                  {e.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="size-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
