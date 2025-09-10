import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VB Finance - Финансовое и юридическое консультирование | Профессиональные услуги",
  description:
    "VB Finance предоставляет профессиональные услуги финансового и юридического консультирования. Бухгалтерский учет, налоговое планирование, юридическое сопровождение бизнеса. Опытные специалисты, индивидуальный подход.",
  keywords:
    "финансовое консультирование, юридические услуги, бухгалтерский учет, налоговое планирование, юридическое сопровождение, VB Finance, консультант, бизнес услуги",
  authors: [{ name: "VB Finance" }],
  creator: "VB Finance",
  publisher: "VB Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vsbatrakova.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VB Finance - Профессиональное финансовое и юридическое консультирование",
    description:
      "Получите профессиональную помощь в области финансов и права. Бухгалтерский учет, налоговое планирование, юридическое сопровождение бизнеса от экспертов VB Finance.",
    url: "https://vsbatrakova.ru",
    siteName: "VB Finance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VB Finance - Финансовое и юридическое консультирование",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VB Finance - Финансовое и юридическое консультирование",
    description:
      "Профессиональные услуги финансового и юридического консультирования. Бухгалтерский учет, налоговое планирование, юридическое сопровождение.",
    images: ["/og-image.jpg"],
    creator: "@Financier_and_lawyer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "VB Finance",
              description: "Профессиональные услуги финансового и юридического консультирования",
              url: "https://vsbatrakova.ru",
              telephone: "+7 (999) 123-45-67",
              email: "vsbatrakova@mail.ru",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RU",
                addressLocality: "Москва",
              },
              serviceType: [
                "Финансовое консультирование",
                "Юридические услуги",
                "Бухгалтерский учет",
                "Налоговое планирование",
              ],
              founder: {
                "@type": "Person",
                name: "Батракова Вероника Сергеевна",
              },
              sameAs: ["https://t.me/Financier_and_lawyer"],
            }),
          }}
        />
      </body>
    </html>
  )
}
