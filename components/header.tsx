"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Send, Mail } from "lucide-react"
import { ContactForm } from "./contact-form"

export function Header() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/vb-logo.jpg" alt="VB Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-foreground">VB Finance</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Услуги
              </a>
              <a
                href="#process"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Как работаем
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white hidden sm:flex"
                onClick={() => setIsContactFormOpen(true)}
              >
                Получить консультацию
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a
                  href="#process"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Как работаем
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a
                  href="#contacts"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full sm:hidden"
                  onClick={() => {
                    setIsContactFormOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Получить консультацию
                </Button>
              </nav>
            </div>
          )}

          <div className="hidden lg:flex items-center justify-center py-2 border-t border-border/50">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-green-600">+79061504747</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-green-600">vsbatrakova@mail.ru</span>
              </div>
              <a
                href="https://t.me/VB_Finance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>@VB_Finance</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
