import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mudit Rajput</h3>
            <p className="text-gray-300 mb-4">
              A passionate Full Stack Developer specializing in building modern web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MuditxRajput"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mudit-rajput/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:muditrajputpersonal@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">Chandigarh, India</p>
            <p className="text-gray-300 mb-2">muditrajputpersonal@gmail.com</p>
            <p className="text-gray-300">+91 9511510494</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {currentYear} Mudit Rajput. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

