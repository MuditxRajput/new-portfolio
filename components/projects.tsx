"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Post Target",
      description: "Social Media Post Scheduler",
      details:
        "Developed a social media post scheduler that allows users to connect multiple social media accounts and schedule posts across different platforms with a single click. Implemented queue-based job processing using BullMQ for efficient post scheduling and delivery. Built with Next.js, Node.js, Express.js, and MongoDB, leveraging Turborepo for monorepo management and AWS for cloud hosting. Integrated Git for version control and optimized backend performance using queues for asynchronous task handling.",
      image: "/p1.png",
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "BullMQ", "Turborepo", "AWS"],
      liveLink: "https://post-target.vercel.app",
      githubLink: "https://github.com/MuditxRajput/PostTarget",
    },
    {
      title: "QuickReply",
      description: "AI Powered Lead Closing Tool ",
      details:
        "QuickReply is a tool that uses AI to help you close deals faster. It uses AI to generate responses to common questions and helps you close deals faster.",
      image: "/p2.png",
      technologies: ["React", "Redux", "Node.js", "Express.js", "Supabase", "Tailwind CSS","RetellAI","Twilio","SendGrid","Resend","n8n"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "AKTU Quantum",
      description: "Free AKTU Quantum for B.Tech Students",
      details:
        "Developed and launched AKTU Quantum website using React.js, Node.js with Express.js, MongoDB, and Tailwind CSS; achieved 24.5k monthly users within 2 months, boosting student engagement exponentially.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://wwww.aktu-quantum.online",
      githubLink: "https://github.com/MuditxRajput/PdfParadise",
    },
    {
      title: "Devsheet",
      description: "Remote Job Portal",
      details:
        "Designed and developed a remote job portal for developers across the world using Next.js and MongoDB. This portal contains dev jobs like frontend, backend, AI, ML, DevOps, etc. All jobs are fetched from websites like Reeds, remoteok, remotive, and many more.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "API Integration"],
      liveLink: "https://devsheet.vercel.app",
      githubLink: "#",
    },
    
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github size={16} className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

