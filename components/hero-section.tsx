import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-gradient"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit text-base px-6 py-3 bg-accent text-white border-accent/20 hover:bg-accent/90 transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Профессиональные финансовые услуги
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                РАСТИМ 
                <span className=" bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  {" "}БИЗНЕС
                </span>
                {" "}ВМЕСТЕ
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                Комплексное финансовое сопровождение вашего бизнеса от экспертов с многолетним опытом
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-colors">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Заявочная налоговая оптимизация</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-colors">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Финансовое планирование</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-colors">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Юридическая защита бизнеса</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-colors">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Бухгалтерский учет</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Рассчитать стоимость
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full text-center bg-transparent hover:bg-accent/10 border-accent/30 text-accent hover:text-accent px-6 py-4 h-auto min-h-[3rem] whitespace-normal leading-tight"
              >
                Рассчитать стоимость финансово-юридического обслуживания
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative rounded-3xl overflow-hidden bg-white p-12 hover:shadow-2xl transition-all duration-700 group shadow-lg">
              <img
                src="/hero-busines.jpg"
                alt="Финансовый консультант"
                className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-700 shadow-2xl"
              />

              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Онлайн консультации</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-800">Рост прибыли +40%</span>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
