"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

// Icon
import ProfileIcon from "@/src/assets/avatar/profileicon/Profile.svg";
import Message from "@/src/assets/icon/Message.svg";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple landing page might take 1-2 weeks, while a full web application could take 2-3 months. I always provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you work with remote teams?",
    answer:
      "Yes! I have extensive experience working with distributed teams across different time zones. I'm comfortable with async communication and use tools like Slack, Zoom, and project management platforms.",
  },
  {
    question: "What's your development process?",
    answer:
      "I follow an agile approach: understanding requirements, creating wireframes/mockups, development in sprints, regular testing, and iterative improvements based on feedback. Communication is key throughout.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! I can jump into existing codebases, fix bugs, add new features, optimize performance, or help with refactoring. I'm comfortable working with legacy code and modern stacks alike.",
  },
];

export default function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Button
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % faqs.length);
  };

  // Prev Button
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  const currentFAQ = faqs[currentIndex];

  return (
    <section className="px-4 py-12 md:px-20 md:py-32">
      <div className="mb-8 md:flex md:items-start md:justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Still Got Questions?
          </h2>
          <p className="text-neutral-400 text-md md:text-lg md:max-w-xl">
            I’ve listed answers to questions I often get as a frontend
            developer.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-3 shrink-0 mt-4">
          <Button
            variant="neutral"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="py-5 px-12 font-medium disabled:opacity-30"
          >
            Prev
          </Button>
          <Button
            variant="neutral"
            onClick={handleNext}
            disabled={currentIndex === faqs.length - 1}
            className="py-5 px-12 font-medium disabled:opacity-30"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Navigation Buttons - mobile only */}
      <div className="flex gap-3 mb-6 md:hidden">
        <Button
          variant="neutral"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="py-5 px-12 font-medium disabled:opacity-30"
        >
          Prev
        </Button>
        <Button
          variant="neutral"
          onClick={handleNext}
          disabled={currentIndex === faqs.length - 1}
          className="py-5 px-12 font-medium disabled:opacity-30"
        >
          Next
        </Button>
      </div>

      {/* Mobile - single card */}
      <div className="md:hidden max-w-full">
        <Card className="bg-primary-400 border-none">
          <CardContent className="space-y-3">
            <div className="flex items-start justify-between">
              <Image src={ProfileIcon} alt="Avatar" width={90} height={90} />
              <Image src={Message} alt="Message Icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-100 leading-tight mt-15">
              {currentFAQ.question}
            </h3>
            <p className="text-neutral-100 text-base leading-loose w-90">
              {currentFAQ.answer}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Desktop - horizontal cards, active card highlighted */}
      <div className="hidden md:flex md:items-stretch gap-4 overflow-hidden md:py-12">
        {faqs.map((faq, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer transition-all duration-300 shrink-0 ${
                isActive ? "md:w-[24rem]" : "md:w-[15rem]"
              }`}
            >
              <Card
                className={`h-full border-none transition-all duration-300 ${
                  isActive ? "bg-primary-400" : "bg-black"
                }`}
              >
                <CardContent className="h-full flex flex-col justify-between p-6 md:-m-2 md:-mt-5">
                  {isActive ? (
                    <>
                      <div className="flex items-start justify-between">
                        <Image
                          src={ProfileIcon}
                          alt="Avatar"
                          width={80}
                          height={90}
                          className="hidden"
                        />

                        {/* Mobile Avatar Icon */}
                        <Image
                          src={ProfileIcon}
                          alt="Avatar"
                          width={80}
                          height={80}
                        />
                        <Image
                          src={Message}
                          alt="Message Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="space-y-3 mt-25">
                        <h3 className="text-xl font-bold text-neutral-100 leading-tight">
                          {faq.question}
                        </h3>
                        <p className="text-neutral-100 text-sm leading-loose">
                          {faq.answer}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={Message}
                        alt="Message Icon"
                        width={40}
                        height={40}
                      />
                      <h3 className="text-xl font-bold text-neutral-100 leading-tight mt-auto">
                        {faq.question}
                      </h3>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {faqs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary-300"
                : "w-2 bg-neutral-600 hover:bg-neutral-500"
            }`}
            aria-label={`Go to question ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
