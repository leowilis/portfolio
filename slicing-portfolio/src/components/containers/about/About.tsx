"use client"

import Image from "next/image";
import { motion } from "framer-motion";

// Social Media
import Facebook from "@/src/assets/socialMedia/facebook.svg";
import Instagram from "@/src/assets/socialMedia/instagram.svg";
import LinkedIn from "@/src/assets/socialMedia/linkedin.svg";
import Tiktok from "@/src/assets/socialMedia/tiktok.svg";
import Avatar from "@/src/assets/about/Avatar.svg";

// Skills Icon
import Code from "@/src/assets/about/code.svg";
import Web from "@/src/assets/about/web.svg";
import UI from "@/src/assets/about/group.svg";
import Mobile from "@/src/assets/about/mobile.svg";

const skills = [
  {
    icon: Code,
    alt: "Code",
    title: "Frontend Development",
    desc: "I build responsive, accessible, and scalable websites using modern frontend tools and best practices.",
  },
  {
    icon: Web,
    alt: "Web",
    title: "Web Performance",
    desc: "I optimize websites for speed and efficiency to ensure smooth experiences across all devices.",
  },
  {
    icon: UI,
    alt: "UI",
    title: "Component Based UI",
    desc: "I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.",
  },
  {
    icon: Mobile,
    alt: "Mobile",
    title: "Responsive Design",
    desc: "I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.",
  },
];

export default function About() {
  return (
    <section className="px-4 py-12 md:px-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
        {/* Title */}
        <div className="md:max-w-2xl">
          <h2 className="text-3xl md:text-3xl font-bold leading-relaxed mb-12">
            I turn ideas and designs into functional, accessible, and performant websites
            <span className="text-primary-300 block md:block">
              using modern frontend technologies
            </span>
          </h2>
        </div>

        {/* Right Side - About Me & Social */}
        <div className="md:text-left">
          <p className="text-neutral-400 text-sm mb-8 md:mb-30">About Me</p>
          <div className="flex gap-4 md:justify-end">
            <Image alt="Facebook" src={Facebook} width={40} height={40} />
            <Image alt="Instagram" src={Instagram} width={40} height={40} />
            <Image alt="LinkedIn" src={LinkedIn} width={40} height={40} />
            <Image alt="Tiktok" src={Tiktok} width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-neutral-800 mb-7" />

      {/* Content Grid */}
      <div className="grid md:grid-cols-[auto_1fr] md:gap-16">
        {/* Avatar - Left */}
        <div className="flex justify-center mb-7 md:mb-0">
          <Image alt="Avatar" src={Avatar} className="w-full h-auto md:w-100" />
        </div>

        {/* Skills Grid - Right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12 md:justify-center md:items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="space-y-3 p-4 rounded-xl cursor-pointer"
            >
              <Image alt={skill.alt} src={skill.icon} width={48} height={48} />
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}