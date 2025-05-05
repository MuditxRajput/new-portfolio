"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-4">
              I'm Mudit Rajput, a passionate Full Stack Developer specializing in building modern web applications.
              Currently pursuing my Bachelor's degree in Information Technology at KIET Group of Institutions, I have
              developed a strong foundation in both frontend and backend technologies.
            </p>
            <p className="text-gray-700 mb-4">
              With expertise in React.js, Next.js, Node.js, and MongoDB, I enjoy creating efficient, scalable, and
              user-friendly applications. I'm particularly interested in building responsive web applications that
              provide exceptional user experiences.
            </p>
            <p className="text-gray-700">
              When I'm not coding, I'm solving problems on platforms like LeetCode, GeeksforGeeks, and Coding Ninja,
              where I've completed over 500 questions and achieved Grand Master status.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-900 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900">muditrajputpersonal@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-900 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">+91 9511510494</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-900 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-900">Chandigarh, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-900 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="text-gray-900">B.Tech in Information Technology</p>
                  <p className="text-gray-700 text-sm">KIET Group of Institutions (2020-2024)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

