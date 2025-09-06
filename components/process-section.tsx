"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, CheckCircle, Clock, Star, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

export function ProcessSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const steps = [
    {
      step: "1",
      title: "Формируем команду для вашего проекта",
      description: "Подбираем специалистов под ваши задачи",
      icon: Users,
      delay : "delay-100"
    },
    {
      step: "2",
      title: "Создаем план и анализируем проблемы",
      description: "Детальный анализ текущей ситуации",
      icon: TrendingUp,
      delay : "delay-200"
    },
    {
      step: "3",
      title: "Создаем цели и задачи для достижения результата",
      description: "Определяем конкретные шаги к успеху",
      icon: CheckCircle,
      delay : "delay-300"
    },
    {
      step: "4",
      title: "Начинаем работу",
      description: "Приступаем к реализации плана",
      icon: Clock,
      delay : "delay-[400ms]"
    },
    {
      step: "5",
      title: "Выводим ваш бизнес на новый уровень",
      description: "Достигаем поставленных целей",
      icon: Star,
      delay : "delay-500"
    },
  ]

  return (
    <section id="process" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-800 ${
            isIntersecting ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <Badge variant="secondary" className="w-fit mx-auto text-base px-4 py-2">
            Процесс работы
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Как мы <span className="text-accent">работаем</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Пошаговый процесс работы с нашими клиентами для достижения максимального результата
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700  ${
                  isIntersecting
                    ? isIntersecting ? `opacity-100 translate-y-0 ${item.delay}` : "opacity-0 translate-y-14"
                    : "opacity-0"
                }`}
              >
                <Card className="text-center p-6 h-full border-2 border-transparent group-hover:border-accent/20 transition-all duration-300 bg-background hover:shadow-lg">
                  <CardContent className="space-y-4 p-0">
                    <div className="relative">
                      <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <item.icon className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-balance leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-16 transition-all duration-800 delay-700 ${
            isIntersecting ? "animate-fade-in opacity-100" : ""
          }`}
        >
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Готовы начать работу с нами?</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 px-8">
              Начать работу
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
