import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/vb-logo.jpg" alt="VB Logo" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">VB Finance</span>
            </div>
            <p className="text-primary-foreground/80 text-pretty">
              Профессиональные финансовые услуги для развития вашего бизнеса
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (812) 985-99-99</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (962) 685-99-99</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@infin.ru</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Услуги</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Налоговая оптимизация</div>
              <div>Финансовое планирование</div>
              <div>Юридическая защита</div>
              <div>Бухгалтерский учет</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Пакеты обслуживания</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Базовый пакет</div>
              <div>Стандартный пакет</div>
              <div>Премиум пакет</div>
              <div>Индивидуальный пакет</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 VB Finance. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
