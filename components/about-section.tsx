"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"
import { Award, Users, TrendingUp, Shield } from "lucide-react"

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const {ref : refWhyUs, isIntersecting : isIntersectingWhyUS} = useIntersectionObserver();

  const achievements = [
    {
      icon: Award,
      title: "15+ лет опыта",
      description: "Успешная работа на рынке финансовых и юридических услуг",
      delay: "delay-100",
    },
    {
      icon: Users,
      title: "500+ клиентов",
      description: "Довольных клиентов, которые доверяют нам свой бизнес",
      delay: "delay-200",
    },
    {
      icon: TrendingUp,
      title: "98% успеха",
      description: "Положительных результатов в решении задач клиентов",
      delay: "delay-300",
    },
    {
      icon: Shield,
      title: "100% гарантия",
      description: "Защиты интересов и конфиденциальности клиентов",
      delay: "delay-400",
    },
  ]

  return (
    <section id="about" className="py-15 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-800 ${
            isIntersecting ? "translate-y-0 opacity-100" : "translate-y-[20px]"
          }`}
        >
          <Badge variant="secondary" className="w-fit mx-auto text-base px-4 py-2">
            О нас
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Мы создаем условия для <span className="text-accent">успешного развития</span> вашего бизнеса
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Наша компания специализируется на комплексном финансовом и юридическом сопровождении бизнеса. Мы помогаем
            предпринимателям сосредоточиться на развитии своего дела, взяв на себя все вопросы учета, налогообложения и
            правовой защиты.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-700 border-0 bg-background text-center ${
                isIntersecting ? `opacity-100 ${achievement.delay} translate-y-0` : "opacity-0 translate-y-14"
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <achievement.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
         ref={refWhyUs}
          className={`bg-background rounded-2xl p-8 lg:p-12 shadow-lg transition-all duration-800 ${
            isIntersectingWhyUS ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">Почему выбирают нас?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Индивидуальный подход:</strong> Каждый клиент получает
                    персональное решение, учитывающее специфику его бизнеса
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Команда экспертов:</strong> Наши специалисты имеют профильное
                    образование и многолетний опыт работы
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Современные технологии:</strong> Используем передовые IT-решения
                    для эффективного ведения учета
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Полная ответственность:</strong> Гарантируем качество услуг и
                    несем ответственность за результат
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="/business-protection.jpg"
                alt="О нашей компании"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
