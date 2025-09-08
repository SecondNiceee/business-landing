"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Award, Gift } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Рост оборотов и прибыли",
    value: "+50%",
    description: "Увеличиваем доходность вашего бизнеса благодаря оптимизации процессов и стратегическому планированию",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    iconBg: "bg-white/30",
  },
  {
    icon: Shield,
    title: "Снижение налоговой нагрузки",
    value: "-20%",
    description: "Легальная налоговая оптимизация с использованием всех доступных льгот и преференций",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    iconBg: "bg-white/30",
  },
  {
    icon: Award,
    title: "Защита интересов бизнеса",
    value: "100%",
    description: "Комплексная правовая защита и сопровождение всех аспектов деятельности компании",
    gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
    iconBg: "bg-white/30",
  },
  {
    icon: Gift,
    title: "Льготы и субсидии",
    value: "Максимум",
    description: "Помогаем получить все доступные государственные льготы, субсидии и поддержку для бизнеса",
    gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    iconBg: "bg-white/30",
  },
]

export function OnlineConsultationStatic() {
  return (
    <section className="py-8 lg:py-15 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Онлайн консультации</h2>
          <p className="text-lg lg:text-xl text-muted-foreground">Результаты нашей работы говорят сами за себя</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              <CardContent className="p-0">
                <div className={`${benefit.gradient} p-6 lg:p-8 h-full`}>
                  <div className="text-center space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 rounded-full ${benefit.iconBg} shadow-lg`}
                    >
                      <benefit.icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg lg:text-xl font-bold text-white">{benefit.title}</h3>
                      <div className="text-3xl lg:text-4xl font-bold text-white">{benefit.value}</div>
                      <p className="text-sm lg:text-base text-white leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
