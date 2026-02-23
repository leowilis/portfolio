"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Portfolio1 from "@/src/assets/portfolio/Portfolio1.svg";
import Portfolio2 from "@/src/assets/portfolio/Portfolio2.svg";
import Portfolio3 from "@/src/assets/portfolio/Portfolio3.svg";

const portfolios = [
  { id: 1, title: "Portofolio 1", year: "2025", image: Portfolio1 },
  { id: 2, title: "Portofolio 2", year: "2025", image: Portfolio2 },
  { id: 3, title: "Portofolio 3", year: "2025", image: Portfolio3 },
];

export default function PortfolioShowcase() {
  return (
    <section className="px-4 py-9">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Bridging Design and Development
        </h2>
        <p className="text-neutral-400 text-lg max-w-md mx-auto">
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-5">
        {portfolios.map((portfolio) => (
          <motion.div
            key={portfolio.id}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="space-y-4 cursor-pointer"
          >
            {/* Portfolio Image */}
            <div className="relative w-full h-auto">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Portfolio Info */}
            <div>
              <h3 className="text-lg font-bold mb-2">{portfolio.title}</h3>
              <p className="text-neutral-400 text-base">{portfolio.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}