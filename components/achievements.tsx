"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming",
      details: [
        "Completed 270+ Questions on LeetCode",
        "Solved 150+ Problems on GeeksforGeeks",
        "Completed 200+ Questions on Coding Ninja",
      ],
    },
    {
      title: "Coding Ninja Grand Master",
      details: ["Currently Grand Master at Coding Ninja leader board"],
    },
    {
      title: "Coding Competitions",
      details: ["Secured 136th rank out of 2761 in Coding contest by Mohammad Fraz"],
    },
    {
      title: "Web Development",
      details: ["Completed PHP, JavaScript, HTML, MySQL Quiz from W3school with 2 stars"],
    },
  ]

  return (
    <section id="achievements" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable achievements and accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Trophy className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
              </div>
              <ul className="space-y-2 ml-4">
                {achievement.details.map((detail, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

