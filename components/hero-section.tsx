"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import { ContactForm } from "./contact-form"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const heroImages = [
  {
    src: "/hero-busines.jpg",
    alt: "Финансовый консультант",
    badge: "Онлайн консультации",
    metric: "Рост прибыли +40%",
  },
  {
    src: "/business-meeting.jpg",
    alt: "Деловая встреча",
    badge: "Профессиональный подход",
    metric: "Экономия времени 60%",
  },
  {
    src: "/business-protection.jpg",
    alt: "Защита бизнеса",
    badge: "Правовая защита",
    metric: "Защита интересов 100%",
  },
  {
    src: "/digital-security.webp",
    alt: "Цифровая безопасность",
    badge: "Современные технологии",
    metric: "Безопасность 100%",
  },
]

export function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <>
      <section  className={`relative min-h-screen flex items-center py-4 sm:py-6 lg:py-16 overflow-hidden `}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-green-100/20 animate-gradient"></div>

        {/* Множественные зеленые размытия для создания интересного фона */}
        <div className="absolute top-10 left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-green-400/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-20 right-10 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-green-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-green-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-green-600/12 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-green-200/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-40 left-1/3 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-emerald-400/12 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "5s" }}
        ></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[700px]">
            <div className="w-full min-w-0 space-y-4 sm:space-y-5 lg:space-y-8 animate-fade-in-left order-2 lg:order-1 flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-accent text-white border-accent/20 hover:bg-accent/90 transition-colors sm:max-w-[unset] whitespace-normal "
                >
                  <Sparkles className="w-3 lg:w-4 h-3 lg:h-4 mr-1.5 sm:mr-2" />
                  <span className="leading-tight sm:text-left text-center">
                    Профессиональные финансовые и юридические услуги
                  </span>
                </Badge>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-bold leading-tight break-words">
                  РАЗВИТИЕ И ЗАЩИТА БИЗНЕСА
                </h1>
                <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Комплексное финансовое и юридическое сопровождение вашего бизнеса от экспертов с многолетним опытом
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 w-full">
                <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg bg-white border border-border/50 hover:bg-gray-50 transition-colors w-full min-w-0">
                  <CheckCircle className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 truncate">
                    Заявочная налоговая оптимизация
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg bg-white border border-border/50 hover:bg-gray-50 transition-colors w-full min-w-0">
                  <CheckCircle className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 truncate">
                    Финансовое планирование
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg bg-white border border-border/50 hover:bg-gray-50 transition-colors w-full min-w-0">
                  <CheckCircle className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 truncate">
                    Юридическая защита бизнеса
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg bg-white border border-border/50 hover:bg-gray-50 transition-colors w-full min-w-0">
                  <CheckCircle className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 truncate">
                    Бухгалтерский учет
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full group shadow-lg hover:shadow-xl transition-all duration-300 h-12 sm:h-14 text-sm sm:text-base"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Рассчитать стоимость
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-center bg-transparent hover:bg-accent/10 border-accent/30 text-accent hover:text-accent h-12 sm:h-14 text-sm sm:text-base"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Получить консультацию
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right order-1 lg:order-2 w-full min-w-0 flex items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-700 group shadow-lg w-full max-w-lg">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96 w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {heroImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white rounded-lg p-2 sm:p-3 shadow-xl border border-gray-200 max-w-[calc(100%-1rem)]">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm font-semibold text-black leading-tight truncate">
                              {image.badge}
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white rounded-lg p-2 sm:p-3 shadow-xl border border-gray-200 max-w-[calc(100%-1rem)]">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight truncate">
                              {image.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors z-10 text-lg"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors z-10 text-lg"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -top-3 sm:-top-4 lg:-top-6 -left-3 sm:-left-4 lg:-left-6 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-green-400/25 rounded-full blur-2xl animate-float"></div>
                <div
                  className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -right-3 sm:-right-4 lg:-right-6 w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 bg-emerald-500/20 rounded-full blur-2xl animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute -top-6 -right-2 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-green-300/30 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="absolute -bottom-2 -left-6 w-14 sm:w-20 lg:w-24 h-14 sm:h-20 lg:h-24 bg-green-600/15 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "3.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
