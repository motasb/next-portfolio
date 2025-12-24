"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | string[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل معي",
    "nav.downloadCV": "تحميل السيرة الذاتية",

    // Hero Section
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "عبد الرحيم أحمد الحلواني",
    "hero.title": "مطور واجهات أمامية",
    "hero.description":
      "شغوف بإنشاء واجهات مستخدم متجاوبة وسهلة الاستخدام باستخدام React و Next.js. متخصص في بناء تطبيقات ويب محسنة لمحركات البحث بمعايير الويب الحديثة.",
    "hero.contactMe": "تواصل معي",
    "hero.viewProjects": "عرض المشاريع",

    // About Section
    "about.title": "نبذة عني",
    "about.subtitle": "تعرف أكثر على خلفيتي وتعليمي وتفاصيلي الشخصية.",
    "about.personalInfo": "المعلومات الشخصية",
    "about.name": "الاسم",
    "about.location": "الموقع",
    "about.email": "البريد الإلكتروني",
    "about.phone": "الهاتف",
    "about.country": "مصر , سوهاج",
    "about.education": "التعليم",
    "about.educationDetails": "بكالوريوس العلوم، جامعة الأزهر، أسيوط، مصر (2022)",
    "about.grade": "التقدير: جيد",
    "about.objective": "الهدف المهني",
    "about.objectiveText":
      "مطور واجهات أمامية متحمس مع أساس قوي في تطوير الويب وشغف بإنشاء واجهات مستخدم متجاوبة وسهلة الاستخدام. أسعى للمساهمة بحلول مبتكرة وكود عالي الجودة ضمن فريق تطوير مهني.",
    "about.strengths": "نقاط القوة والمهارات",
    "about.strengthsList": [
      "تحسين محركات البحث باستخدام Next.js ومعايير الويب الحديثة",
      "خبرة في إنشاء خرائط مواقع ديناميكية تتحدث تلقائياً لتحسين SEO",
      "القدرة على بناء تطبيقات ويب تقدمية (PWA) مع دعم العمل بدون اتصال",
      "احترافية في استخدام تطبيقات Microsoft Office",
      "العمل الجماعي وحل المشكلات",
      "إدارة الوقت وتنظيم المهام",
      "التعلم الذاتي واستكشاف التقنيات الجديدة",
    ],

    // Skills Section
    "skills.title": "المهارات التقنية",
    "skills.subtitle": "خبرتي التقنية والأدوات التي أستخدمها لإحياء المشاريع.",
    "skills.programmingLanguages": "لغات البرمجة",
    "skills.frameworks": "إطارات العمل",
    "skills.libraries": "المكتبات",
    "skills.tools": "الأدوات والتقنيات",
    "skills.backend": "الخادم الخلفي",
    "skills.databases": "قواعد البيانات",
    "skills.proficiency": "مستوى الإتقان",

    // Projects Section
    "projects.title": "المشاريع المميزة",
    "projects.subtitle": "مجموعة مختارة من أعمالي الحديثة والمشاريع التي طورتها.",
    "projects.ecommerce.title": "متجر قوارير للملابس",
    "projects.ecommerce.description":
      " متجر مع قوائم المنتجات ووظائف السلة ومصادقة المستخدم وادارة المخزن للملابس.",
    "projects.cloudhosting.title": "استضافة سحابية",
    "projects.cloudhosting.description": "موقع خدمة استضافة سحابية بتصميم متجاوب وقوائم خدمات وخطط أسعار.",
    "projects.albayan.title": "أكاديمية البيان",
    "projects.albayan.description":
      "نظام تسجيل كامل لأكاديمية تعليمية مع إدارة الدورات وملفات الطلاب ولوحة تحكم الإدارة.",
    "projects.telawa.title": "أكاديمية التلاوة",
    "projects.telawa.description": "منصة تعليمية للدورات عبر الإنترنت مع دروس فيديو وتتبع التقدم وإنتاج الشهادات.",
    "projects.realestate.title": "عقارات سوهاج",
    "projects.realestate.description": "موقع قوائم عقارية مع بحث العقارات والتصفية ونماذج الاتصال للمشترين المحتملين.",
    "projects.blog.title": "موقع مدونة",
    "projects.blog.description": "تطبيق مدونة يتيح إضافة الصور والمنشورات والتعليقات",
    "projects.frontend": "الواجهة الأمامية",
    "projects.backend": "الخادم الخلفي",
    "projects.liveDemo": "عرض مباشر",

    // Contact Section
    "contact.title": "تواصل معي",
    "contact.subtitle": "لديك مشروع في ذهنك أو تريد التعاون؟ لا تتردد في التواصل!",
    "contact.info": "معلومات التواصل",
    "contact.connectWith": "تواصل معي",
    "contact.whatsapp": "واتساب",
    "contact.sendMessage": "أرسل لي رسالة",
    "contact.yourName": "اسمك",
    "contact.yourEmail": "بريدك الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.messageSent": "تم إرسال الرسالة!",
    "contact.messageDescription": "شكراً لك على رسالتك. سأعود إليك قريباً.",
    "contact.form.name": "محمد أحمد",
    "contact.form.email": "mohamed@gmail.com",
    "contact.form.subject": "استفسار عن مشروع",
    "contact.form.message": "رسالتك هنا...",

    // Footer
    "footer.title": "مطور واجهات أمامية",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.name": "Abd-El-Raheem Elhlwany",
    "hero.title": "Frontend Developer",
    "hero.description":
      "Passionate about creating responsive, user-friendly interfaces with React and Next.js. Specialized in building SEO-optimized web applications with modern web standards.",
    "hero.contactMe": "Contact Me",
    "hero.viewProjects": "View Projects",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Get to know more about my background, education, and personal details.",
    "about.personalInfo": "Personal Information",
    "about.name": "Name",
    "about.location": "Location",
    "about.email": "Email",
    "about.phone": "Phone",
    "about.country": "Egypt, Sohag",
    "about.education": "Education",
    "about.educationDetails": "Bachelor of Science, Al-Azhar University, Assiut, Egypt (2022)",
    "about.grade": "Grade: Good",
    "about.objective": "Professional Objective",
    "about.objectiveText":
      "Motivated Frontend Developer with a strong foundation in web development and a passion for creating responsive, user-friendly interfaces. Seeking to contribute innovative solutions and high-quality code within a professional development team.",
    "about.strengths": "Strengths & Skills",
    "about.strengthsList": [
      "SEO optimization with Next.js and modern web standards",
      "Experience creating dynamic sitemaps that update automatically",
      "Ability to build Progressive Web Apps (PWA) with offline support",
      "Professional in use of Microsoft office apps",
      "Teamwork and Problem-Solving",
      "Time Management and Task Organization",
      "Self-Learning and Exploring New Technologies",
    ],

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.subtitle": "My technical expertise and tools I use to bring projects to life.",
    "skills.programmingLanguages": "Programming Languages",
    "skills.frameworks": "Frameworks",
    "skills.libraries": "Libraries",
    "skills.tools": "Tools & Technologies",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.proficiency": "Skill Proficiency",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my recent work and projects I've developed.",
    "projects.ecommerce.title": "E-Commerce Quareer ",
    "projects.ecommerce.description":
      "A full-stack e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    "projects.cloudhosting.title": "Cloud Hosting",
    "projects.cloudhosting.description":
      "A cloud hosting service website with responsive design, service listings, and pricing plans.",
    "projects.albayan.title": "Albayan Academy",
    "projects.albayan.description":
      "A complete registration system for an educational academy with course management, student profiles, and admin dashboard.",
    "projects.telawa.title": "Telawa Academy",
    "projects.telawa.description":
      "An educational platform for online courses with video lessons, progress tracking, and certificate generation.",
    "projects.realestate.title": "Acarat Sohag Real Estate",
    "projects.realestate.description":
      "A real estate listing website with property search, filtering, and contact forms for potential buyers.",
    "projects.blog.title": "Blog Website",
    "projects.blog.description":  
      "A blog application that contains the feature of adding photos, posts and comments.",
    "projects.frontend": "Frontend",
    "projects.backend": "Backend",
    "projects.liveDemo": "Live Demo",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have a project in mind or want to collaborate? Feel free to reach out!",
    "contact.info": "Contact Information",
    "contact.connectWith": "Connect With Me",
    "contact.whatsapp": "Whatsapp",
    "contact.sendMessage": "Send Me a Message",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.messageSent": "Message sent!",
    "contact.messageDescription": "Thank you for your message. I'll get back to you soon.",
    "contact.form.name": "Mohamed Ahmed",
    "contact.form.email": "mohamed@gmail.com",
    "contact.form.subject": "Project Inquiry",
    "contact.form.message": "Your message here...",

    // Footer
    "footer.title": "Frontend Developer",
    "footer.rights": "All rights reserved",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string | string[] => {
    const value = translations[language][key as keyof (typeof translations)[typeof language]]
    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
