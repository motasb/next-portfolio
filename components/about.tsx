"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, User } from "lucide-react"
import { SiGmail, SiWhatsapp } from "react-icons/si"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className={`py-16 md:py-24 bg-muted/30 ${language === "ar" ? "font-cairo" : ""}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 `}>
            {t("about.title")}
            </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`text-lg text-foreground/70 max-w-2xl mx-auto`}>
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-semibold mb-4`}>
              {t("about.personalInfo")}
              </h3>
            <div className="space-y-4">
              <div className="items-start gap-3" style={{display:"flex"}}>
                <User className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">{t("about.name")}</h4>
                  <p className="text-foreground/70">{t("hero.name")}</p>
                </div>
              </div>
              <div className="items-start gap-3" style={{display:"flex"}}>
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">{t("about.location")}</h4>
                  <p className="text-foreground/70">{t("about.country")}</p>
                </div>
              </div>
              <div className="items-start gap-3" style={{display:"flex"}}>
                <SiGmail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">{t("about.email")}</h4>
                  <p className="text-foreground/70">abdelraheemelhlwany@gmail.com</p>
                </div>
              </div>
              <div className="items-start gap-3" style={{display:"flex"}}>
                <SiWhatsapp className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">{t("about.phone")}</h4>
                  <p dir="ltr" className="text-foreground/70">{"+20 1020575095"}</p>
                </div>
              </div>
              <div className="items-start gap-3" style={{display:"flex"}}>
                <GraduationCap className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">{t("about.education")}</h4>
                  <p className="text-foreground/70">{t("about.educationDetails")}</p>
                  <p className="text-foreground/70">{t("about.grade")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">{t("about.objective")}</h3>
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground/80 leading-relaxed">
                  {t("about.objectiveText")}
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mb-4 mt-8">{t("about.strengths")}</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-2 list-disc list-inside text-foreground/80">
                  {(() => {
                    const strengthsList = t("about.strengthsList");
                    if (Array.isArray(strengthsList)) {
                      return strengthsList.map((strength: string, index: number) => (
                        <li key={index}>{strength}</li>
                      ));
                    } else {
                      return <li>{strengthsList}</li>;
                    }
                  })()}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
