"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Phone, Mail, Send } from "lucide-react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  message: string
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "vsbatrakova@mail.ru",
          subject: "Новая заявка с сайта",
          formData: data,
        }),
      })

      if (response.ok) {
        alert("Заявка успешно отправлена!")
        reset()
        onClose()
      } else {
        alert("Ошибка при отправке заявки. Попробуйте еще раз.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Ошибка при отправке заявки. Попробуйте еще раз.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl">Заявка на консультацию</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-600">+79061504747</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-600">vsbatrakova@mail.ru</span>
            </div>
            <a
              href="https://t.me/VB_Finance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-500 transition-colors"
            >
              <Send className="h-4 w-4" />
              <span className="text-sm">@VB_Finance</span>
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Фамилия Имя Отчество *</label>
                <Input
                  {...register("name", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="Фамилия Имя Отчество"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон *</label>
                <Input
                  {...register("phone", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email *</label>
                <Input
                  {...register("email", {
                    required: "Поле обязательно для заполнения",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Введите корректный email адрес",
                    },
                  })}
                  type="email"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Компания *</label>
                <Input
                  {...register("company", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="Название компании"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Сообщение *</label>
              <Textarea
                {...register("message", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 10,
                    message: "Сообщение должно содержать минимум 10 символов",
                  },
                })}
                placeholder="Расскажите о ваших потребностях..."
                rows={4}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="text-xs text-muted-foreground">
              Нажимая кнопку отправить, Вы даете согласие на обработку персональных данных в соответствии с 152-ФЗ и{" "}
              <a
                href="/police.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500 underline"
              >
                Политике обработки персональных данных
              </a>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправляется..." : "Отправить заявку"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Отмена
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
