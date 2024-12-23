"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend",
    description:
      "Creating responsive and interactive web interfaces with React to build web modern.",
    href: "",
    isActive: false,
  },
  {
    num: "02",
    title: "Backend",
    description:
      "Building RESTful APIs with Node.js and Express.js, using PostgreSQL and MongoDB for data management.",
    href: "",
    isActive: true,
  },
  {
    num: "03",
    title: "SEO Optimization",
    description:
      "A project focused on improving website visibility and ranking on search engines.",
    href: "",
    isActive: false,
  },
  {
    num: "04",
    title: "UI Design",
    description:
      "Designing wireframes, prototypes, and interfaces with Figma for optimal user experience and responsive design.",
    href: "",
    isActive: true,
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div
                  className={`text-5xl font-extrabold text-outline lg:group-hover:text-outline-hover text-transparent transition-all duration-500 ${
                    service.isActive && "text-outline-hover md:text-outline"
                  }`}
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className={`w-[70px] h-[70px] rounded-full lg:group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ${
                    service.isActive ? "bg-accent md:bg-white" : "bg-white"
                  }`}
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2
                className={`text-[42px] font-bold leading-none  lg:group-hover:text-accent transition-all duration-500 ${
                  service.isActive && "text-accent md:text-white"
                }`}
              >
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
