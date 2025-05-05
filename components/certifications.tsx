"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Development by 100x dev",
      issuer: "100x dev",
      date: "2024",
      link: "#",
    },
    {
      title: "Advanced Certification in Java and Data Structures",
      issuer: "Coding Ninja",
      date: "2022",
      link: "#",
    },
    {
      title: "JavaScript Course with Certification",
      issuer: "Udemy",
      date: "2022",
      link: "#",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      link: "#",
      status: "Ongoing",
    },
    {
      title: "Hacker Rank Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "2022",
      link: "#",
    },
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      date: "2023",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I'm constantly learning and improving my skills. Here are some of the certifications I've earned.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">
                    {cert.date} {cert.status && `(${cert.status})`}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" /> View Certificate
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

