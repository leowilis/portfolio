"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import Inbox from "@/src/assets/hero/button/mail.svg";

import HTML from "@/src/assets/tools/html.svg";
import CSS from "@/src/assets/tools/css.svg";
import Javascript from "@/src/assets/tools/javascript.svg";
import Typescript from "@/src/assets/tools/typescript.svg";
import Sequalize from "@/src/assets/tools/sequalize.svg";
import MongoDB from "@/src/assets/tools/mongodb.svg";

const skills = [
  { name: "HTML", icon: HTML, percentage: 100 },
  { name: "CSS", icon: CSS, percentage: 90 },
  { name: "Javascript", icon: Javascript, percentage: 90 },
  { name: "Typescript", icon: Typescript, percentage: 80 },
  { name: "Sequalize", icon: Sequalize, percentage: 80 },
  { name: "Mongo DB", icon: MongoDB, percentage: 75 },
];

export default function ToolsSkills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skillsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="mt-10 md:flex md:gap-0 md:items-stretch md:min-h-125">
      {/* Header */}
      <div className="mb-8 md:mb-0 md:flex md:flex-col md:justify-between md:shrink-0 md:pr-48 md:py-4">
        <h2 className="text-4xl font-bold mb-4 md:text-5xl md:leading-tight md:w-91.75">Tools I Use to Build</h2>
        <p className="text-neutral-400 text-md mb-30 md:mb-90 md:w-91.75">
         From code to design — here’s the tech that helps me turn ideas into real products.
        </p>

        <Button className="flex bg-primary-300 text-sm font-semibold w-full h-12 p-2 py-2 mb-8 items-center justify-center gap-2 hover:bg-sky-700 md:mb-0 md:w-91.75">
          <Image alt="Inbox" src={Inbox} width={24} height={24} />
          Send Message
        </Button>
      </div>

      {/* Skills List */}
      <div className="md:flex-1 md:pl-12 md:py-4 relative">
        
        {/* Vertical line container — track */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-neutral-700" />

        {/* Vertical line scroll  */}
        <motion.div
          className="hidden md:block absolute left-0 top-0 w-1 bg-white origin-top"
          style={{ scaleY, height: "50%" }}
        />

        <div ref={skillsRef} className="space-y-6 md:space-y-0 md:divide-y md:divide-neutral-800">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleClick(index)}
              className="py-6 border-b border-neutral-800 last:border-b-0 md:flex md:flex-col md:justify-center md:border-b-0 cursor-pointer select-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="md:w-11 md:h-11"
                  />
                  <span>{skill.name}</span>
                </div>
                <span className="font-bold text-lg">{skill.percentage}%</span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-primary-300 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}