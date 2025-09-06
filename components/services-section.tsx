import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Users, Clock, Star, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Заявочная налоговая оптимизация",
      description: "Легальное снижение налоговой нагрузки с гарантией результата",
    },
    {
      icon: Shield,
      title: "Финансовое планирование",
      description: "Стратегическое планирование финансов для устойчивого роста",
    },
    {
      icon: Users,
      title: "Юридическая защита бизнеса",
      description: "Комплексная правовая поддержка и защита интересов компании",
    },
    {
      icon: Clock,
      title: "Бухгалтерский учет",
      description: "Профессиональное ведение учета с использованием современных технологий",
    },
    {
      icon: Star,
      title: "Управленческий консалтинг",
      description: "Экспертная помощь в принятии стратегических решений",
    },
    {
      icon: CheckCircle,
      title: "Подбор и обучение кадров",
      description: "Поиск квалифицированных специалистов и их профессиональное развитие",
    },
  ]

  return (
    <section
      id="services"
      className="py-12 bg-gradient-to-br from-muted/30 via-accent/5 to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto text-base px-4 py-2">
            Наши услуги
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Комплексное финансовое сопровождение</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Предоставляем полный спектр услуг для развития и защиты вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
