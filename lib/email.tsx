import nodemailer from "nodemailer"

// Email configuration
const MAIL_CONFIG = {
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "kolya.titov.05@inbox.ru",
    pass: "77V49AsPjPgMYw25LrdK",
  },
}

const RECIPIENT_EMAIL = "vsbatrakova@mail.ru"

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport(MAIL_CONFIG)

  const mailOptions = {
    from: {
      name: "VB",
      address: "kolya.titov.05@inbox.ru",
    },
    to: RECIPIENT_EMAIL,
    subject,
    html,
  }

  return await transporter.sendMail(mailOptions)
}

export function generateEmailHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { background: #f9fafb; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Новая заявка на консультацию</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Имя:</div>
            <div class="value">${formData.name || "Не указано"}</div>
          </div>
          <div class="field">
            <div class="label">Телефон:</div>
            <div class="value">${formData.phone || "Не указано"}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${formData.email || "Не указано"}</div>
          </div>
          ${
            formData.company
              ? `
          <div class="field">
            <div class="label">Компания:</div>
            <div class="value">${formData.company}</div>
          </div>
          `
              : ""
          }
          ${
            formData.message
              ? `
          <div class="field">
            <div class="label">Сообщение:</div>
            <div class="value">${formData.message}</div>
          </div>
          `
              : ""
          }
        </div>
      </div>
    </body>
    </html>
  `
}
