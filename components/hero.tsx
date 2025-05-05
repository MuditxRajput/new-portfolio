"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const roles = ["Full Stack Developer", "Freelancer", "SDE"]

  useEffect(() => {
    const interval = setInterval(() => {
      setText(roles[index].substring(0, text.length + 1))

      if (text.length === roles[index].length) {
        // Wait for 2 seconds before starting to delete
        setTimeout(() => {
          let newText = roles[index]
          const deleteInterval = setInterval(() => {
            newText = newText.substring(0, newText.length - 1)
            setText(newText)

            if (newText.length === 0) {
              clearInterval(deleteInterval)
              setIndex((prevIndex) => (prevIndex + 1) % roles.length)
            }
          }, 50)
        }, 2000)

        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text, index, roles])

  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-lg font-medium text-gray-600 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Mudit Rajput</h1>
            <div className="h-8 mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                I'm a <span className="text-gray-900 font-semibold">{text}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating efficient, scalable, and user-friendly web applications. Specialized in
              React.js, Next.js, Node.js, and MongoDB. Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gray-900 hover:bg-gray-800">
                <Link href="#contact" className="flex items-center">
                  Contact Me <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://www.linkedin.com/in/mudit-rajput/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Hire Me <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/MuditxRajput" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/mudit-rajput/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:muditrajputpersonal@gmail.com">
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Mudit Rajput"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-gray-100 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-gray-100 rounded-tr-full opacity-70"></div>
    </section>
  )
}

export default Hero

