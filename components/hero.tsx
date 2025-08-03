"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t , language } = useLanguage()
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-12 ${language === "ar" ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-medium text-primary"
              >
                {t("hero.greeting")}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t("hero.name")}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`text-2xl md:text-3xl font-semibold text-foreground/80 ${language === "ar" ? "font-cairo" : ""}`}
              >
                {t("hero.title")}
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-lg text-foreground/70 max-w-xl ${language === "ar" ? "font-cairo" : ""}`}
            >
               {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="#contact">{t("hero.contactMe")}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">{t("hero.viewProjects")}</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-4 pt-4"
            >
              <Link
                href="https://github.com/motasb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <GrGithub size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdelraheem-elhlwany-505211352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <GrLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:abdelraheemelhlwany@gmail.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <GrMail size={24} />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/personalPhoto.webp"
                alt="Abd-El-Raheem Elhlwany"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <Link href="#about">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ArrowDown />
                    <span className="sr-only">Scroll down</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
