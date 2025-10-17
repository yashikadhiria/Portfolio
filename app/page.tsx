import labels from "@/data/labels.json"
import profile from "@/data/profile.json"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="min-h-screen font-manrope">
      <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 border-b border-border/50 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="font-bold text-xl hover:text-primary transition-colors font-handwriting">
            {labels.brand}
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5">
              {labels.nav.projects}
            </a>
            <a href="#skills" className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5">
              {labels.nav.skills}
            </a>
            <a href="#experience" className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5">
              {labels.nav.experience}
            </a>
            <a href="#certifications" className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5">
              {labels.nav.certifications}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5">
              {labels.nav.contact}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/5 border border-primary/20 hover:border-primary/40"
            >
              {labels.nav.resume}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle label={labels.actions.toggleTheme} />
          </div>
        </div>
      </header>

      <Hero id="hero" labels={labels} profile={profile} />

      <div className="mx-auto max-w-6xl px-4">
        <Separator className="my-16" />

        <Projects id="projects" title={labels.sections.projects} labels={labels} projects={profile.projects} />

        <Separator className="my-16" />

        <Skills
          id="skills"
          labels={labels}
          softSkills={profile.softSkills}
          pmSkills={profile.pmSkills}
          tools={profile.tools}
          aiToolkit={profile.aiToolkit}
          title={labels.sections.skills}
        />

        <Separator className="my-16" />

        <Experience
          id="experience"
          labels={labels}
          experiences={profile.experience}
          title={labels.sections.experience}
        />

        <Separator className="my-16" />

        <Certifications
          id="certifications"
          labels={labels}
          certifications={profile.certifications}
          title={labels.sections.certifications}
        />

        <Separator className="my-16" />

        <Contact
          id="contact"
          labels={labels}
          contact={profile.contact}
          title={labels.sections.contact}
          resumeUrl={profile.resumeUrl}
          resumeLabel={labels.nav.resume}
        />
      </div>

      <footer className="mt-20 border-t border-border/50 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-muted-foreground flex items-center justify-between">
          <span>{labels.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</span>
          <a href="#hero" className="hover:text-primary transition-colors font-medium">
            {labels.footer.backToTop}
          </a>
        </div>
      </footer>
    </main>
  )
}
