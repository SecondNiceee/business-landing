import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/vb-logo.jpg" alt="VB Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">VB Finance</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Как работаем
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Команда
            </a>
            <a
              href="#contacts"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-accent hover:bg-accent/90">Получить консультацию</Button>
        </div>

        <div className="hidden lg:flex items-center justify-center py-2 border-t border-border/50">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+7 (812) 985-99-99</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+7 (962) 685-99-99</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
