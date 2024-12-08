"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Redesign of the Politeknik Pajajaran website to improve its appearance and user experience.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/assets/project/project1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Redesign of the LLDIKTI Region 4 website to make it more modern and responsive.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/assets/project/project2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Poljan Smart Learning, an online learning platform based on web articles.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/project/project3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 3",
    description:
      "HIMAKOM Politeknik Pajajaran website, providing interactive and informative content.",
    stack: [
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "Bootstrap5" },
    ],
    image: "/assets/project/project4.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "project 3",
    description:
      "Edutorial ( Edukasi berbasis tutorial ), a tutorial-based education platform for online learning via articles.",
    stack: [{ name: "PHP" }, { name: "Bootstrap5" }, { name: "PostgreSQL" }],
    image: "/assets/project/project5.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "fullstack",
    title: "project 3",
    description:
      "POS (Point of Sale System), a web-based application for managing stores and product sales.",
    stack: [{ name: "PHP" }, { name: "Bootstrap5" }, { name: "PostgreSQL" }],
    image: "/assets/project/project6.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the las comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowRight className="-rotate-45 text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-full xl:w-[50%] mb-8 xl:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-ful bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-acccent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-primary"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;