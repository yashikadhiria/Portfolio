"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { HoverEffect } from "@/components/ui/hover-effect"

type Labels = typeof import("@/data/labels.json")

type Project = {
  title: string
  summary: string
  tags: string[]
  prds: { label: string; url: string }[]
  prototype?: string
}

export function Projects({
  id,
  title,
  labels,
  projects,
}: {
  id: string
  title: string
  labels: Labels
  projects: Project[]
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id={`${id}-title`} className="text-4xl md:text-5xl font-bold text-balance mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{labels.projects.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={itemVariants}>
              <HoverEffect>
                <Card className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-balance group-hover:text-primary transition-colors font-manrope">
                      {p.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.summary}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-3 py-1 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {p.prds.map((prd, k) => (
                        <Button key={k} variant="outline" size="sm" asChild className="text-xs group/prd border-primary/30 hover:border-primary hover:bg-primary/10">
                          <a
                            href={prd.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                          >
                            <span>{prd.label}</span>
                            <ArrowUpRight className="size-3 group-hover/prd:translate-x-0.5 group-hover/prd:-translate-y-0.5 transition-transform" aria-hidden="true" />
                          </a>
                        </Button>
                      ))}
                      {p.prototype && (
                        <Button variant="default" size="sm" asChild className="text-xs group/prototype">
                          <a
                            href={p.prototype}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                          >
                            <span>View Prototype</span>
                            <ExternalLink className="size-3 group-hover/prototype:translate-x-0.5 group-hover/prototype:-translate-y-0.5 transition-transform" aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </HoverEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
