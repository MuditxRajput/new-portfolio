"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Next.js (API)", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Supabase", level: 70 },
      ],
    },
    {
      title: "Languages & Others",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Redux", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "WordPress", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gray-900 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

