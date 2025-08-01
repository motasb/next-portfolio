"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, User } from "lucide-react"
import { SiGmail, SiWhatsapp } from "react-icons/si"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get to know more about my background, education, and personal details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Name</h4>
                  <p className="text-foreground/70">Abd-El-Raheem Ahmed Elhlwany</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Sohag, Egypt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SiGmail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/70">abdelraheemelhlwany@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SiWhatsapp className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-foreground/70">+20 1020575095</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-foreground/70">Bachelor of Science, Al-Azhar University, Assiut, Egypt (2022)</p>
                  <p className="text-foreground/70">Grade: Good</p>
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
            <h3 className="text-2xl font-semibold mb-4">Professional Objective</h3>
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground/80 leading-relaxed">
                  Motivated Frontend Developer with a strong foundation in web development and a passion for creating
                  responsive, user-friendly interfaces. Seeking to contribute innovative solutions and high-quality code
                  within a professional development team.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Strengths & Skills</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-2 list-disc list-inside text-foreground/80">
                  <li>SEO optimization with Next.js and modern web standards</li>
                  <li>Experience creating dynamic sitemaps that update automatically</li>
                  <li>Ability to build Progressive Web Apps (PWA) with offline support</li>
                  <li>Professional in use of Microsoft office apps</li>
                  <li>Teamwork and Problem-Solving</li>
                  <li>Time Management and Task Organization</li>
                  <li>Self-Learning and Exploring New Technologies</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
