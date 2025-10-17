import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Mail, Phone, MessageCircle } from "lucide-react"

type Labels = typeof import("@/data/labels.json")

type ContactData = {
  email: string
  phone?: string
  other?: { label: string; url: string }[]
}

export function Contact({
  id,
  labels,
  contact,
  title,
  resumeUrl,
  resumeLabel,
}: {
  id: string
  labels: Labels
  contact: ContactData
  title: string
  resumeUrl: string
  resumeLabel: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 id={`${id}-title`} className="text-4xl md:text-5xl font-bold text-balance mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{labels.contact.subtitle}</p>
      </div>

      <Card className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-semibold flex items-center justify-center gap-3 font-manrope">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="size-6 text-primary" />
            </div>
            {labels.contact.getInTouch}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group/contact">
                <div className="p-2 bg-primary/10 rounded-lg group-hover/contact:bg-primary/20 transition-colors">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors font-medium text-sm">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              {contact.phone && (
                <div className="flex items-center gap-4 p-4 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group/contact">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover/contact:bg-primary/20 transition-colors">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Phone</p>
                    <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors font-medium text-sm">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="w-full hover:shadow-lg transition-all duration-300">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2">
                  <Mail className="size-4" />
                  {labels.contact.emailMe}
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span>{resumeLabel}</span>
                </a>
              </Button>
            </div>
          </div>

          {contact.other && contact.other.length > 0 && (
            <div className="pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-3 justify-center">
                {contact.other.map((o, i) => (
                  <Button key={i} variant="outline" asChild className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300">
                    <a href={o.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <span>{o.label}</span>
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
