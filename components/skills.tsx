"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Wrench, Brain } from "lucide-react"
import { HoverEffect } from "@/components/ui/hover-effect"
import { TagCloud } from "@/components/ui/animated-tags"

type Labels = typeof import("@/data/labels.json")

export function Skills({
  id,
  labels,
  softSkills,
  pmSkills,
  tools,
  aiToolkit,
  title,
}: {
  id: string
  labels: Labels
  softSkills: string[]
  pmSkills: string[]
  tools: string[]
  aiToolkit: string[]
  title: string
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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{labels.skills.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <HoverEffect>
              <Card className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors font-manrope">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Users className="size-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    {labels.skills.softSkills}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <TagCloud 
                    tags={softSkills} 
                    variant="secondary" 
                    baseDelay={0.2}
                  />
                </CardContent>
              </Card>
            </HoverEffect>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HoverEffect>
              <Card className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors font-manrope">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Target className="size-5 text-green-600 dark:text-green-400" />
                    </div>
                    {labels.skills.pmSkills}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <TagCloud 
                    tags={pmSkills} 
                    variant="outline" 
                    baseDelay={0.4}
                  />
                </CardContent>
              </Card>
            </HoverEffect>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <HoverEffect>
              <Card className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors font-manrope">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Wrench className="size-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    {labels.skills.tools}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <TagCloud 
                      tags={tools} 
                      variant="default" 
                      baseDelay={0.6}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <div className="p-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-md">
                        <Brain className="size-4 text-pink-600 dark:text-pink-400" />
                      </div>
                      <span>{labels.skills.aiToolkit}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <TagCloud 
                        tags={aiToolkit} 
                        variant="outline" 
                        baseDelay={0.8}
                        className="[&>*]:bg-pink-50 [&>*]:border-pink-200 [&>*]:text-pink-700 dark:[&>*]:bg-pink-950/20 dark:[&>*]:border-pink-800 dark:[&>*]:text-pink-300"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverEffect>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
