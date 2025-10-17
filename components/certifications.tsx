import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Award, Calendar, Building } from "lucide-react"

type Labels = typeof import("@/data/labels.json")

type Cert = {
  title: string
  issuer: string
  year: string
  url?: string
}

export function Certifications({
  id,
  labels,
  certifications,
  title,
}: {
  id: string
  labels: Labels
  certifications: Cert[]
  title: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 id={`${id}-title`} className="text-4xl md:text-5xl font-bold text-balance mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{labels.certifications.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <Card key={i} className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-balance group-hover:text-primary transition-colors font-manrope">
                    {c.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-1 bg-muted rounded-md">
                    <Building className="size-3" />
                  </div>
                  <span className="font-medium">{c.issuer}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-1 bg-muted rounded-md">
                    <Calendar className="size-3" />
                  </div>
                  <span className="font-medium">{c.year}</span>
                </div>
                {c.url && (
                  <div className="pt-2">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      <span className="text-sm font-medium">{labels.certifications.view}</span>
                      <ArrowUpRight className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
