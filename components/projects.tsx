"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import { useLanguage } from "@/contexts/language-context";

export default function Projects() {
  const { t , language } = useLanguage();
  const projects = [
  {
    title: t("projects.realestate.title"),
    description: t("projects.realestate.description"),
    image: "/images/sohag.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "shadcn/ui", "Cloudinary"],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://acaratsohag.com",
  },
  {
    title: t("projects.ecommerce.title"),
    description: t("projects.ecommerce.description"),
    image: "/images/quareer.webp",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "Node.js", "Tailwind CSS", "Nodemailer", "Redux", "Next.Auth", ],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://e-commerce-by-next-sage.vercel.app",
  },
  {
    title: t("projects.cloudhosting.title"),
    description: t("projects.cloudhosting.description"),
    image: "/images/CloudHosting.webp",
    tags: ["Next.js", "Tailwind CSS", "React", "Nodemailer", "Cloudinary"],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://cloud-hosting-project-topaz.vercel.app",
  },
  {
    title: t("projects.albayan.title"),
    description: t("projects.albayan.description"),
    image: "/images/albayan.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Nodemailer"],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://www.albayan-academy.org",
  },
  {
    title: t("projects.telawa.title"),
    description: t("projects.telawa.description"),
    image: "/images/telawa.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Nodemailer"],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://www.telawaacademy.com",
  },
  {
    title: t("projects.blog.title"),
    description: t("projects.blog.description"),
    image: "/images/blog.webp",
    tags: ["React", "Tailwind CSS", "MongoDB", "Cloudinary", "Nodemailer"],
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://elhlwany-blog.netlify.app",
  },
]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}>
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`text-lg text-foreground/70 max-w-2xl mx-auto ${language === "ar" ? "font-cairo" : ""}`}>
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className={`h-full flex-col overflow-hidden hover:shadow-lg transition-shadow ${language === "ar" ? "font-cairo" : ""}`}
               style={{ display: 'flex' }}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={"Project Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                    priority
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className=" flex-wrap gap-2 mt-4" style={{ display: 'flex'}}>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex-wrap gap-2" style={{ display: 'flex' }}>
                  {project.githubFrontend && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" items-center gap-1"
                        style={{ display: 'flex' }}
                      >
                        <GrGithub size={16} />
                        Frontend
                      </a>
                    </Button>
                  )}
                  {project.githubBackend && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" items-center gap-1"
                        style={{ display: 'flex' }}
                      >
                        <GrGithub size={16} />
                        Backend
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" items-center gap-1"
                        style={{ display: 'flex' }}
                      >
                        <ExternalLink size={16} />
                        {t("projects.liveDemo")}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
