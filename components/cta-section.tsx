import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Готовы начать сотрудничество?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Получить консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Рассчитать стоимость
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
