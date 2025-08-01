"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, PenToolIcon as Tool, Library } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Frameworks",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["React.js", "Next.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Libraries",
      icon: <Library className="h-6 w-6 text-primary" />,
      skills: ["Next-Auth", "Shadcn/ui", "Axios", "Redux", "Framer Motion"],
    },
    {
      title: "Tools & Technologies",
      icon: <Tool className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Responsive Design", "UX Optimization"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "Prisma ORM"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My technical expertise and tools I use to bring projects to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Skill Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "React.js", level: 90 },
              { name: "Next.js", level: 85 },
              { name: "JavaScript", level: 90 },
              { name: "TypeScript", level: 80 },
              { name: "Tailwind CSS", level: 85 },
              { name: "Node.js", level: 75 },
              { name: "MongoDB", level: 70 },
              { name: "PostgreSQL", level: 65 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-primary h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
