"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "./contact-form"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function CtaSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const { isIntersecting, ref } = useIntersectionObserver()

  return (
    <>
      <section
        ref={ref}
        className={`py-15 relative overflow-hidden transition-all duration-800 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-transparent to-green-100/15"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-400/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/12 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-64 h-64 bg-green-300/18 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-10 w-88 h-88 bg-green-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute top-20 right-1/3 w-56 h-56 bg-green-200/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Готовы начать сотрудничество?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => setIsContactFormOpen(true)}>
                  Получить консультацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setIsContactFormOpen(true)}>
                  Рассчитать стоимость
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
