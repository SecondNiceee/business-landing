import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit text-base px-4 py-2">
                Профессиональные финансовые услуги
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                РАСТИМ <span className="text-accent">БИЗНЕС</span> ВМЕСТЕ
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Комплексное финансовое сопровождение вашего бизнеса от экспертов с многолетним опытом
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">Заявочная налоговая оптимизация</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">Финансовое планирование</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">Юридическая защита бизнеса</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">Бухгалтерский учет</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-md">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full group">
                Рассчитать стоимость
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full text-center bg-transparent hover:bg-accent/5">
                Рассчитать стоимость финансово-юридического обслуживания
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 hover:shadow-2xl transition-all duration-500">
              <img
                src="/professional-business-woman.png"
                alt="Финансовый консультант"
                className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Онлайн консультации</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
