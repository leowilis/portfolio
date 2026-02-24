import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import RatingIcon from "@/src/assets/icon/ratingicon.svg";
import QuoteIcon from "@/src/assets/icon/quoteicon.svg";

import Avatar1 from "@/src/assets/avatar/avatar1.svg";
import Avatar2 from "@/src/assets/avatar/avatar2.svg";
import Avatar3 from "@/src/assets/avatar/avatar3.svg";
import Avatar4 from "@/src/assets/avatar/avatar4.svg";

const testimonials = [
  {
    metric: "8X",
    title: "More users converted after redesign",
    testimonial:
      "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
    author: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: Avatar1,
  },
  {
    metric: "3X",
    title: "Improved user engagement and sign-ups",
    testimonial:
      "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    author: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: Avatar2,
  },
  {
    metric: null,
    title: null,
    testimonial:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    author: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: Avatar3,
  },
  {
    metric: null,
    title: null,
    testimonial:
      "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    author: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: Avatar4,
  },
];

export default function trusted() {
  return (
    <section className="px-4 py-2 md:px-20">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold mb-4">Trusted Voices</h3>
        <p className="text-neutral-400 text-md max-w-md mx-auto">
          Here’s what people say about working with me — across projects, teams,
          and timelines.
        </p>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="space-y-4 md:hidden">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className={
              index === 0
                ? "bg-gradient-to-br from-primary-400/30 to-transparent border-primary-400/30"
                : "bg-transparent border-neutral-800"
            }
          >
            <CardContent className="pt-5 space-y-4">
              {item.metric && (
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-white">
                    {item.metric}
                  </h3>
                  <p className="text-2xl font-bold text-white">{item.title}</p>
                </div>
              )}
              <Image src={RatingIcon} alt="Rating" width={91} height={16} />
              <p className="text-neutral-400 text-md leading-7 w-full break-words">
                {item.testimonial}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="relative items-center">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-y-4">
                    <p className="font-semibold text-white text-sm mt-3">
                      {item.author}
                    </p>
                    <p className="text-white text-xs">{item.role}</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Image src={QuoteIcon} alt="quote" width={48} height={48} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:grid md:grid-cols-[1fr_2fr] md:gap-6">
        {/* Left - 1 tall card spanning full height */}
        <Card className="bg-gradient-to-br from-primary-400/30 to-transparent border-primary-400/30 row-span-2">
          <CardContent className="pt-5 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-white">
                  {testimonials[0].metric}
                </h3>
                <p className="text-2xl font-bold text-white">
                  {testimonials[0].title}
                </p>
              </div>
              <Image src={RatingIcon} alt="Rating" width={91} height={16} />
              <p className="text-neutral-400 text-sm leading-7 w-full break-words">
                {testimonials[0].testimonial}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex flex-col gap-2">
                <Image
                  src={testimonials[0].avatar}
                  alt={testimonials[0].author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonials[0].author}
                  </p>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
              <Image src={QuoteIcon} alt="quote" width={48} height={48} />
            </div>
          </CardContent>
        </Card>

        {/* Right top - 1 big card */}
        <Card className="bg-transparent border-neutral-800">
          <CardContent className="pt-5 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-white">
                  {testimonials[1].metric}
                </h3>
                <p className="text-2xl font-bold text-white">
                  {testimonials[1].title}
                </p>
              </div>
              <Image src={RatingIcon} alt="Rating" width={91} height={16} />
              <p className="text-neutral-400 text-sm leading-7 w-full break-words">
                {testimonials[1].testimonial}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex flex-col gap-2">
                <Image
                  src={testimonials[1].avatar}
                  alt={testimonials[1].author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonials[1].author}
                  </p>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    {testimonials[1].role}
                  </p>
                </div>
              </div>
              <Image src={QuoteIcon} alt="quote" width={48} height={48} />
            </div>
          </CardContent>
        </Card>

        {/* Right bottom - 2 small cards side by side */}
        <div className="grid grid-cols-2 gap-6">
          {[testimonials[2], testimonials[3]].map((item, index) => (
            <Card key={index} className="bg-transparent border-neutral-800">
              <CardContent className="pt-5 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <Image src={RatingIcon} alt="Rating" width={91} height={16} />
                  <p className="text-neutral-400 text-sm leading-7">
                    {item.testimonial}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col gap-2">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {item.author}
                      </p>
                      <p className="text-neutral-400 text-xs mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <Image src={QuoteIcon} alt="quote" width={48} height={48} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
