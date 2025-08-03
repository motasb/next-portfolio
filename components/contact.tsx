"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"
import { SiGmail, SiWhatsapp } from "react-icons/si"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t , language} = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // // Simulate form submission
    // setTimeout(() => {
    //   toast("Message sent!",{
    //     description: "Thank you for your message. I'll get back to you soon.",
    //   })
    //   setFormData({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    //   })
    //   setIsSubmitting(false)
    // }, 1500)

    // In a real application, you would send the form data to your backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      toast(t("contact.messageSent"),{
        description: t("contact.messageDescription"),
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      toast("Error",{
        description: "There was a problem sending your message. Please try again.",
      })
    }
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <SiGmail className="h-6 w-6 text-primary" />,
      title: t("about.email"),
      value: "abdelraheemelhlwany@gmail.com",
      link: "mailto:abdelraheemelhlwany@gmail.com",
    },
    {
      icon: <SiWhatsapp className="h-6 w-6 text-primary" />,
      title: t("contact.whatsapp"),
      value: "+20 1020575095",
      link: "https://wa.me/+201020575095?text=السلام%20عليكم%20ورحمة%20الله%20وبركاته",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t("about.phone"),
      value: "+20 1020575095",
      link: "tel:+20 1020575095",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t("about.location"),
      value: t("about.country"),
      link: "https://maps.google.com/?q=Sohag,Egypt",
    },
  ]

  return (
    <section id="contact" className={`py-16 md:py-24 ${language === "ar" ? "font-cairo" : ""}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">{t("contact.info")}</h3>

            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 items-start gap-4" style={{display: "flex"}}>
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-lg">{info.title}</h4>
                    <a
                      dir= "auto"
                      href={info.link}
                      target= "_blank"
                      rel= "noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-6">
              <h4 className="font-medium text-lg mb-4">{t("contact.connectWith")}</h4>
              <div className="gap-4" style={{ display: "flex"}}>
                <Button asChild variant="outline" size="icon">
                  <a href="https://github.com/motasb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a
                    href="https://www.linkedin.com/in/abdelraheem-elhlwany-505211352"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">{t("contact.sendMessage")}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t("contact.yourName")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={language === "en" ?"Mohamed ahmed": "محمد أحمد"}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t("contact.yourEmail")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mohamed@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t("contact.subject")}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={language === "en" ?"Project Inquiry": "استفسار عن مشروع"}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language=== "en" ?"Your message here...": "رسالتك هنا..."}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                       {t("contact.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        {t("contact.send")}
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
