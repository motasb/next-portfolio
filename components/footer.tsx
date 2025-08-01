import Link from "next/link"
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Abd-El-Raheem Elhlwany</h3>
            <p className="text-sm text-foreground/70">Frontend Developer</p>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com/motasb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <GrGithub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdelraheem-elhlwany-505211352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <GrLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:abdelraheemelhlwany@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <GrMail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-sm text-foreground/70">© {currentYear} Abd-El-Raheem Elhlwany. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
