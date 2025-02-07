"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiKotlin,
  SiPrisma,
  SiZod,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    title: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "React",
    icon: <FaReact />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    title: "Docker",
    icon: <SiDocker />,
  },
  {
    title: "Python",
    icon: <FaPython />,
  },
  {
    title: "Kotlin",
    icon: <SiKotlin />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma />,
  },
  {
    title: "Zod",
    icon: <SiZod />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
];

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
            }}
            // transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group p-4 sm:p-6 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] 
              hover:border-accent transition-colors duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div
                className="text-2xl sm:text-3xl text-white/80 group-hover:text-accent 
                transition-colors duration-300"
              >
                {skill.icon}
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-white/80 group-hover:text-accent
                transition-colors duration-300"
              >
                {skill.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
