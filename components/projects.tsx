"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Acarat Sohag Real Estate",
      description:
        "A real estate listing website with property search, filtering, and contact forms for potential buyers.",
      image: "/images/sohag.webp",
      tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL","prisma","shadcn/ui" , "cloudinary"],
      githubFrontend: "",
      githubBackend: "",
      liveUrl: "https://acaratsohag.com",
    },
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "/images/bookStore.webp",
      tags: ["Next.js", "React", "MongoDB", "Express", "Node.js" , "Tailwind CSS", "node-mailer"],
      githubFrontend: "https://book-store-elhlwany.netlify.app",
      githubBackend: "https://github.com/motasb/backend",
      liveUrl: "",
    },
    {
      title: "Cloud Hosting",
      description:
        "A cloud hosting service website with responsive design, service listings, and pricing plans.",
      image: "/images/CloudHosting.webp",
      tags: ["Next.js", "Tailwind CSS", "React", "shadcn/ui" , "node-mailer" ,"cloudinary"],
      githubFrontend: "",
      githubBackend: "",
      liveUrl: "https://cloud-hosting-project-topaz.vercel.app",
    },
    {
      title: "Albayan Academy",
      description:
        "A complete registration system for an educational academy with course management, student profiles, and admin dashboard.",
      image: "/images/albayan.webp",
      tags: ["Next.js", "React", "Tailwind CSS" , "shadcn/ui" , "node-mailer" ],
      githubFrontend: "",
      githubBackend: "",
      liveUrl: "https://www.albayan-academy.org",
    },
    {
      title: "Telawa Academy",
      description:
        "An educational platform for online courses with video lessons, progress tracking, and certificate generation.",
      image: "/images/telawa.webp",
      tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui" , "node-mailer"],
      githubFrontend: "",
      githubBackend: "",
      liveUrl: "https://www.telawaacademy.com",
    },
    {
      title: "Blog Website",
      description:
        "A blog application that contains the feature of adding photos, posts and comments.",
      image: "/images/blog.webp",
      tags: ["React", "Tailwind CSS", "MongoDB", "cloudinary", "node-mailer"],
      githubFrontend: "",
      githubBackend: "",
      liveUrl: "https://elhlwany-blog.netlify.app",
    },
  ];

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
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of my recent work and projects I&#39;ve developed.
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
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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
                  <div className="flex flex-wrap gap-2 mt-4">
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
                <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
                  {project.githubFrontend && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github size={16} />
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
                        className="flex items-center gap-1"
                      >
                        <Github size={16} />
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
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        Live Demo
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
