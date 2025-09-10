import { Phone, Mail, Send } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/vb-logo.jpg" alt="VB Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">VB Finance</span>
            </div>
            <p className="text-primary-foreground/80 text-pretty">Профессиональные финансовые и юридические услуги</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-green-400">+79061504747</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-green-400">vsbatrakova@mail.ru</span>
              </div>
              <a
                href="https://t.me/VB_Finance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-accent transition-colors text-green-400"
              >
                <Send className="h-4 w-4 text-green-400" />
                <span>@VB_Finance</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Документы</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <a
                href="/police.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Политика обработки персональных данных
              </a>
            </div>
            <h3 className="font-semibold mt-6">Реквизиты:</h3>
            <div className="space-y-1 text-primary-foreground/80 text-sm">
              <div className="text-green-400">ИП Батракова Вероника Сергеевна</div>
              <div className="text-green-400">ИНН 380110132601</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 VB Finance. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
