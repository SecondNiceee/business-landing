"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Building, Calculator, Gift, Percent, Shield, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Бухгалтерский учет",
    description:
      "Профессиональное ведение бухгалтерского и налогового учета с использованием современных технологий. Полное ведение учета, подготовка отчетности и взаимодействие с контролирующими органами.",
  },
  {
    icon: Shield,
    title: "Юридическая защита бизнеса",
    description:
      "Комплексная правовая поддержка и защита интересов компании. Сопровождение сделок, разрешение споров, корпоративное право и защита от рейдерских захватов.",
  },
  {
    icon: TrendingUp,
    title: "Финансовое планирование",
    description:
      "Стратегическое планирование финансов для устойчивого роста бизнеса. Разрабатываем долгосрочные финансовые стратегии, бюджетирование и прогнозирование денежных потоков.",
  },
  {
    icon: Percent,
    title: "Налоговая оптимизация",
    description:
      "Легальное снижение налоговой нагрузки с гарантией результата. Анализируем вашу деятельность и находим все возможности для оптимизации налогообложения в рамках законодательства.",
  },
  {
    icon: Building,
    title: "Резидентство Сколково",
    description:
      "Помощь в получении статуса резидента Сколково и использовании всех преимуществ инновационного центра. Сопровождение процедуры получения статуса и консультации по льготам.",
  },
  {
    icon: Gift,
    title: "Льготы и субсидии",
    description:
      "Поиск и оформление государственных льгот, субсидий и грантов для вашего бизнеса. Помогаем получить максимальную поддержку от государства для развития компании.",
  },
]

export function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  // Возвращаем готовые классы для from/to состояний
  const getAnimationClasses = (index: number) => {
    switch (index) {
      case 0: // 1-я карточка
      case 3: // 4-я карточка
        return {
          from: "translate-x-[-20px] opacity-0",
          to: "translate-x-0 opacity-100",
        }
      case 1: // 2-я карточка
        return {
          from: "translate-y-[-20px] opacity-0",
          to: "translate-y-0 opacity-100",
        }
      case 4: // 5-я карточка
        return {
          from: "translate-y-[20px] opacity-0",
          to: "translate-y-0 opacity-100",
        }
      case 2: // 3-я карточка
      case 5: // 6-я карточка
        return {
          from: "translate-x-[20px] opacity-0",
          to: "translate-x-0 opacity-100",
        }
      default:
        return {
          from: "translate-y-[20px] opacity-0",
          to: "translate-y-0 opacity-100",
        }
    }
  }

  return (
    <section
      ref={ref}
      id="services"
      className="py-12 bg-gradient-to-br from-muted/30 via-accent/5 to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/15 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/12 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-300/18 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-20 right-1/3 w-48 h-48 bg-green-200/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto text-base px-4 py-2">
            Наши услуги
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Профессиональные финансовые и юридические услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Предоставляем полный спектр услуг для развития и защиты вашего бизнеса
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const { from, to } = getAnimationClasses(index)

            return (
              <Card
                key={index}
                className={`
                  group hover:shadow-xl hover:-translate-y-2
                  transition-all duration-800
                  border-0 bg-background/80 backdrop-blur-sm hover:bg-background
                  ${isIntersecting ? to : from}
                `}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
