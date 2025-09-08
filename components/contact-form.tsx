"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Phone, Mail, Send } from "lucide-react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "vsbatrakova@mail.ru",
          subject: "Новая заявка с сайта",
          formData,
        }),
      })

      if (response.ok) {
        alert("Заявка успешно отправлена!")
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: "",
        })
        onClose()
      } else {
        alert("Ошибка при отправке заявки. Попробуйте еще раз.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm">+79061504777</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm">vsbatrakova@mail.ru</span>
            </div>
            <a
              href="https://t.me/Financier_and_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Send className="h-4 w-4" />
              <span className="text-sm">@Financier_and_lawyer</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя *</label>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон *</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Компания</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Название компании"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Сообщение</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о ваших потребностях..."
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90" disabled={isSubmitting}>
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
