"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

export function TeamSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  const teamMembers = [
    {
      name: "Руководитель бухгалтерского департамента",
      role: "Бухгалтерский учет",
      image: "/professional-female-accountant.png",
      description:
        "Обеспечивает качественное ведение бухгалтерского учета и соблюдение всех требований законодательства",
      delay : "delay-100"
    },
    {
      name: "Ведущий эксперт",
      role: "Налоговое планирование",
      image: "/professional-male-tax-expert.jpg",
      description: "Специализируется на налоговом планировании и оптимизации налоговых платежей",
      delay : "delay-200"
    },
    {
      name: "Юрист",
      role: "Правовое сопровождение",
      image: "/professional-female-lawyer.png",
      description: "Обеспечивает правовую защиту интересов клиентов и юридическое сопровождение сделок",
      delay : "delay-300"
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-800 ${
            isIntersecting ? "animate-fade-in-up opacity-100" : ""
          }`}
        >
          <Badge variant="secondary" className="w-fit mx-auto text-base px-4 py-2">
            Наша команда
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            На протяжении нашего сотрудничества мы обеспечим вам{" "}
            <span className="text-accent">многостороннюю поддержку</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Наша команда будет работать лучших специалистов с опытом работы именно в вашей сфере бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-700 border-0 bg-background overflow-hidden ${
                isIntersecting
                  ? `opacity-100 ${member.delay} translate-y-0`
                  : "opacity-0 translate-y-14"
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="secondary" className="w-fit text-base px-3 py-1">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{member.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
