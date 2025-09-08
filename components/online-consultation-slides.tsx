"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, Shield, Award, Gift } from "lucide-react"

const slides = [
  {
    icon: TrendingUp,
    title: "Рост оборотов и прибыли",
    value: "+50%",
    description: "Увеличиваем доходность вашего бизнеса благодаря оптимизации процессов и стратегическому планированию",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Снижение налоговой нагрузки",
    value: "-20%",
    description: "Легальная налоговая оптимизация с использованием всех доступных льгот и преференций",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Защита интересов бизнеса",
    value: "100%",
    description: "Комплексная правовая защита и сопровождение всех аспектов деятельности компании",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Gift,
    title: "Льготы и субсидии",
    value: "Максимум",
    description: "Помогаем получить все доступные государственные льготы, субсидии и поддержку для бизнеса",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export function OnlineConsultationSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-15 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Онлайн консультации</h2>
          <p className="text-xl text-muted-foreground">Результаты нашей работы говорят сами за себя</p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-80 flex items-center justify-center">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className={`h-full ${slide.bgColor} flex items-center justify-center p-12`}>
                      <div className="text-center space-y-6 max-w-2xl">
                        <div
                          className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg`}
                        >
                          <slide.icon className={`w-10 h-10 ${slide.color}`} />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-gray-900">{slide.title}</h3>
                          <div className={`text-6xl font-bold ${slide.color}`}>{slide.value}</div>
                          <p className="text-lg text-gray-700 leading-relaxed">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-accent" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
