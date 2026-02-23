import Image from "next/image";
import Frame from "@/src/assets/hero/frameAvatar.svg";
import MobileGrid from "@/src/assets/background/mobile-grid.svg";
import SectionBg from "@/src/assets/background/Section.svg";
import SectionMobile from "@/src/assets/background/linear-mobile.svg";
import { Charm } from "next/font/google";
import { Button } from "@/src/components/ui/button";
import Inbox from "@/src/assets/hero/button/mail.svg";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden w-screen md:mb-20">

      {/* Background SVG desktop */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Image
          src={SectionBg}
          alt="section background"
          fill
          className="object-cover object-left-top"
        />
      </div>

      {/* Background SVG mobile */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <Image
          src={SectionMobile}
          alt="section background"
          fill
          className="object-cover object-left-top"
        />
      </div>

      {/* Grid SVG */}
      <div className="md:hidden absolute top-0 left-0 h-full w-full pointer-events-none">
        <Image
          src={MobileGrid}
          alt="grid background"
          fill
          className="object-contain object-left-top opacity-60 md:opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:max-w-7xl md:mx-auto md:px-20 md:py-0 md:max-w-none md:min-h-screen md:flex md:items-center">
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-10 md:items-center md:w-full md:-m-30">

          {/* Image */}
          <div className="flex items-start justify-center -mt-12 md:order-2 md:mb-35 md:mt-0">
            <Image
              alt="Frame Avatar"
              src={Frame}
              width={300}
              height={496}
              className="md:w-96 md:h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 mt-6 text-left md:mt-0 md:gap-8 md:p-30 md:pb-20 md:pt-40">
            <p className="font-medium md:text-base">Hi. I’m Edwin Anderson</p>
            <h1 className="font-bold leading-20 tracking-tight text-[68px]/[70px] md:text-8xl md:leading-none md:-tracking-wider">
              FRONT<span className={`${charm.className} font-normal md:italic`}>END</span>
              <span className="md:block"> DEVELOPER</span>
            </h1>
            <p className="text-neutral-400 text-sm leading-8 tracking-wide md:text-base md:text-neutral-300 md:max-w-xl">
              Passionate about frontend development, I focus on crafting digital products that are visually polished, performance-optimized, and deliver a consistent experience across all platforms.
            </p>

            <div className="flex justify-center mt-8 mb-10 md:justify-start md:mt-16">
              <Button className="bg-primary-300 text-sm font-semibold w-full h-12 flex items-center justify-center gap-2 hover:bg-sky-700 md:w-72 md:px-8 md:h-14 md:text-base">
                <Image alt="Inbox" src={Inbox} className="w-5 h-5" />
                Hire Me
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}