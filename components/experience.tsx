"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology - Information Technology",
      organization: "KIET Group of Institutions",
      location: "Ghaziabad, India",
      period: "May 2020 - June 2024",
      details: "CGPA: 8.0",
    },
    {
      type: "education",
      title: "Class 12",
      organization: "RPS Public School",
      location: "",
      period: "2018-2019",
      details: "Percentage: 88",
    },
    {
      type: "education",
      title: "Class 10",
      organization: "Presidency The International School",
      location: "",
      period: "2016-2017",
      details: "CGPA: 9.2",
    },
    {
      type: "Freelancing",
      title: "Full Stack Developer",
      organization: "hidden",
      location: "Remote",
      period: "April 2025 - till now",
      details: [
        "Developed a MVP for a startup in the lead generation industry and closed the deal.",
        "We use the Modern AI tools and best practices to build the website.",
        "In this project, I have used Next.js, Tailwind CSS, Shadcn UI, Lucide Icons, Supabase, Vercel, retellai, Twilio, SendGrid, and more.",
        "From this website user can call, text and automate their lead generation process with automated meeting scheduler system.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Experience & Education</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-gray-900 z-10 flex items-center justify-center">
                  {exp.type === "education" ? (
                    <GraduationCap className="w-5 h-5 text-gray-900" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-gray-900" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-gray-700">{exp.organization}</h4>
                    {exp.location && <p className="text-gray-600">{exp.location}</p>}
                    <p className="text-gray-500 mb-4">{exp.period}</p>

                    {typeof exp.details === "string" ? (
                      <p className="text-gray-700">{exp.details}</p>
                    ) : (
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

