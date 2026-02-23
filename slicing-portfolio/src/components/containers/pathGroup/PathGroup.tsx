"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "@/src/assets/icon/pathgroup.svg";

const services = [
  "App Development",
  "Website Development",
  "Pixel Perfect",
  "React Expert",
  "Performance Optimization",
  "UI/UX Design",
  "TypeScript",
  "Responsive Design",
  "Clean Code",
  "Modern Frontend",
];

export default function PathGroup() {
  return (
    <div className="w-full overflow-hidden bg-primary-300 py-6 relative z-10">
      <div className="flex">
        <motion.div
          className="flex items-center min-w-max"
          animate={{ x: ["0%", "-10%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...services, ...services].map((service, i) => (
            <div key={i} className="flex items-center gap-6 px-2">

              <span className="text-white font-bold text-4xl whitespace-nowrap">
                {service}
              </span>

              <Image
                src={Icon}
                alt="icon"
                width={60}
                height={60}
                className="opacity-40"
              />

            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
