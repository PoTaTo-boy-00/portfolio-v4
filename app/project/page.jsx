"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    title: "\\Potato/",
    description:
      "A Portfolio to showcase my skills and projects, using <Aceternity UI/> and <Framer Motion/>",
    stack: ["shadcn/ui", "Next.js"],
    live: "https://ayanangshu-portfolio.vercel.app/",
    github: "https://github.com",
    image: "",
  },
  {
    title: "ChatApp",
    description:
      "A RealTime Chat Application that allows users to create rooms and chat with each other",
    stack: ["React", "Socket.io", "DaisyUI"],
    live: "https://github.com",
    github: "https://github.com",
    image: "",
  },

  {
    title: "Medium",
    description:
      "A blogging platform that allows users to create and share articles",
    stack: ["Next.js", "Hono", "Prisma"],
    live: "https://github.com",
    github: "https://github.com",
    image: "",
  },
];

const Skeleton = ({ liveLink, githubLink }) => (
  <div className="flex gap-4 mt-4 items-center">
    <Link href={liveLink}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Live project</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
    <Link href={githubLink}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsGithub className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  </div>
);

const items = projects.map((project) => ({
  title: project.title,
  description: project.description,
  header: <Skeleton liveLink={project.live} githubLink={project.github} />,
  icon: (
    <ul className="flex gap-4">
      {project.stack.map((item, index) => (
        <li key={index} className="text-xl text-accent">
          {item}
          {index !== project.stack.length - 1 && ","}
        </li>
      ))}
    </ul>
  ),
  image: project.image,
}));

export default function GitProjectPage() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          image={item.image}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
