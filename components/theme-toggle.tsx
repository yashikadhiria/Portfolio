"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ label }: { label: string }) {
  const [isDark, setIsDark] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initialize from localStorage or prefers-color-scheme
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const prefersDark =
      typeof window !== "undefined" ? window.matchMedia?.("(prefers-color-scheme: dark)").matches : false
    const shouldDark = stored ? stored === "dark" : prefersDark
    setIsDark(shouldDark)
    if (shouldDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <Button variant="outline" size="icon" aria-label={label} onClick={toggle}>
      {isDark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
    </Button>
  )
}
