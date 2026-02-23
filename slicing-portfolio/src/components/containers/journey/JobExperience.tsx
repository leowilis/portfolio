"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Briefcase from "@/src/assets/icon/briefcase.svg";

import AirbnbLogo from "@/src/assets/companyLogo/Airbnb.svg";
import AdobeLogo from "@/src/assets/companyLogo/adobe.svg";
import ActiveCampaignLogo from "@/src/assets/companyLogo/ActiveCampaign.svg";
import AmplitudeLogo from "@/src/assets/companyLogo/Amplitude.svg";
import AirtableLogo from "@/src/assets/companyLogo/Airtable.svg";

const experiences = [
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Airbnb",
    companyLogo: AirbnbLogo,
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Adobe",
    companyLogo: AdobeLogo,
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "ActiveCampaign",
    companyLogo: ActiveCampaignLogo,
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Amplitude",
    companyLogo: AmplitudeLogo,
  },
  {
    title: "Frontend Developer",
    period: "2025 - Present",
    description: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Airtable",
    companyLogo: AirtableLogo,
  },
];

export default function JobExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => { isDragging.current = false; };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setScrollProgress(progress);
    const cardWidth = (scrollWidth - clientWidth) / (experiences.length - 1);
    setCurrentIndex(Math.round(scrollLeft / cardWidth));
  };

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, experiences.length - 1));
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const cardWidth = (scrollWidth - clientWidth) / (experiences.length - 1);
      sliderRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    }
    setCurrentIndex(clamped);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section className="px-4 py-12 md:px-20">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">My Journey in Tech</h2>
        <p className="text-neutral-400 text-base max-w-xl">
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Card className="bg-transparent border-neutral-800">
          <CardHeader className="border-b border-neutral-800 pb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-1 h-19 bg-primary-300" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentExperience.title}</h3>
                  <p className="text-neutral-400 text-sm mt-2">{currentExperience.period}</p>
                </div>
              </div>
              <Image alt="Briefcase" src={Briefcase} className="mt-6 w-6 h-6" />
            </div>
          </CardHeader>
          <CardContent className="pt-1 space-y-6">
            <p className="text-neutral-400 text-sm leading-8">{currentExperience.description}</p>
            <div className="pt-2">
              <Image src={currentExperience.companyLogo} alt={currentExperience.company} width={120} height={40} />
            </div>
          </CardContent>
        </Card>
        <div className="flex space-x-5 mt-4">
          <Button variant="neutral" onClick={() => scrollTo(currentIndex - 1)} disabled={currentIndex === 0} className="py-5 px-12 font-medium disabled:opacity-30">Prev</Button>
          <Button variant="neutral" onClick={() => scrollTo(currentIndex + 1)} disabled={currentIndex === experiences.length - 1} className="py-5 px-12 font-medium disabled:opacity-30">Next</Button>
        </div>
      </div>

      {/* Desktop slider */}
      <div className="hidden md:block overflow-hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="flex gap-5 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none" }}
        >
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-transparent border-neutral-800 flex-none w-[calc(50%-120px)]"
            >
              <CardHeader className="border-b border-neutral-800 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-19 bg-primary-300" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-neutral-400 text-sm mt-2">{exp.period}</p>
                    </div>
                  </div>
                  <Image alt="Briefcase" src={Briefcase} className="mt-6 w-6 h-6" />
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <p className="text-neutral-400 text-sm leading-8">{exp.description}</p>
                <div className="pt-2">
                  <Image src={exp.companyLogo} alt={exp.company} width={120} height={40} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scrollbar */}
        <div className="mt-6 w-full h-px bg-neutral-800 relative">
          <div
            className="absolute top-0 left-0 h-px bg-white transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Navigation */}
        <div className="flex space-x-5 mt-6">
          <Button variant="neutral" onClick={() => scrollTo(currentIndex - 1)} disabled={currentIndex === 0} className="py-5 px-12 font-medium disabled:opacity-30">Prev</Button>
          <Button variant="neutral" onClick={() => scrollTo(currentIndex + 1)} disabled={currentIndex === experiences.length - 1} className="py-5 px-12 font-medium disabled:opacity-30">Next</Button>
        </div>
      </div>
    </section>
  );
}