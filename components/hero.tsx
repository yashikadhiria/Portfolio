"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Coffee, Heart } from "lucide-react"
import Image from "next/image"
import labels from "@/data/labels.json"
import profile from "@/data/profile.json"
import { MediumIcon } from "@/components/ui/icons"

interface HeroProps {
  id: string
  labels: typeof labels
  profile: typeof profile
}

export function Hero({ id, labels, profile }: HeroProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 font-manrope">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-foreground font-handwriting leading-tight"
            >
              {profile.name}
            </motion.h1>

            {/* One Liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed font-manrope font-medium text-muted-foreground"
            >
              {profile.oneLiner}
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Code className="size-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Building products with logic & heart</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Coffee className="size-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Fueled by caffeine and passion</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Heart className="size-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Driven to turn ideas into impact</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {profile.socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-4 py-3 bg-card/50 hover:bg-card/80 backdrop-blur-sm rounded-xl transition-all duration-300 hover:shadow-personal border border-border/50 hover:border-primary/30 hover-glow"
                >
                  {social.label === "LinkedIn" && <Linkedin className="size-4 text-blue-600" />}
                  {social.label === "X" && <svg className="size-4 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                  {social.label === "Medium" && <MediumIcon className="size-4 text-gray-900 dark:text-gray-100" />}
                  {social.label === "GitHub" && <Github className="size-4 text-gray-900 dark:text-gray-100" />}
                  {social.label === "Email" && <Mail className="size-4 text-red-600" />}
                  <span className="text-sm font-medium">{social.label}</span>
                  <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group hover:shadow-lg transition-all duration-300" asChild>
                <a href="#projects">
                  <span>{labels.hero.ctaPrimary}</span>
                  <ExternalLink className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group hover:shadow-lg transition-all duration-300" asChild>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <span>{labels.nav.resume}</span>
                  <ExternalLink className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square md:aspect-[4/3]">
                  <Image
                    src={profile.imageUrl || "/placeholder-user.jpg"}
                    alt={labels.hero.imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Personal Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Floating Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute top-4 left-4"
                  >
                    <Badge className="bg-primary text-primary-foreground backdrop-blur-sm border-0 shadow-lg">
                      Product Manager
                    </Badge>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="absolute bottom-4 right-4"
                  >
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground backdrop-blur-sm border-0 shadow-lg">
                      Available for Work
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}