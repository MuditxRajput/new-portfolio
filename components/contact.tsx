"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Feel free to contact me for any work or suggestions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-white rounded-lg shadow-md mr-4">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <a
                    href="mailto:muditrajputpersonal@gmail.com"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    muditrajputpersonal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-white rounded-lg shadow-md mr-4">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <a href="tel:+919511510494" className="text-gray-700 hover:text-gray-900 transition-colors">
                    +91 9511510494
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-white rounded-lg shadow-md mr-4">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-700">Chandigarh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MuditxRajput"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Github className="w-6 h-6 text-gray-900" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mudit-rajput/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="w-6 h-6 text-gray-900" />
                </a>
                <a
                  href="mailto:muditrajputpersonal@gmail.com"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Mail className="w-6 h-6 text-gray-900" />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Hire Me</h4>
              <p className="text-gray-600 mb-4">
                I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life!
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mudit-rajput/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:muditrajputpersonal@gmail.com"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors"
                >
                  Email Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1Q6qYx2XHLelapCZ8XvdMlg0lzjPOATro/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

