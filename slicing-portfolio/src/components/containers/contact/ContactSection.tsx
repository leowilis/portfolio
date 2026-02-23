"use client";

import Image from "next/image";
import ContactForm from "@/src/components/containers/contact/ContactForm";
import FooterBgMobile from "@/src/assets/background/footer-mobile.svg";
import FooterBgDesktop from "@/src/assets/background/footer-desktop.svg";

import Facebook from "@/src/assets/footerIcon/footer-fb.svg";
import Instagram from "@/src/assets/footerIcon/footer-ig.svg";
import LinkedInd from "@/src/assets/footerIcon/footer-linkedin.svg";
import Tiktok from "@/src/assets/footerIcon/footer-tiktok.svg";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pt-16 md:px-20 md:pb-30">
      {/* Background teal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(6,90,104,0.6) 30%, rgba(20,155,176,0.85) 90%, rgba(6,90,104,0.7) 110%)`,
        }}
      />

      {/* Mobile SVG */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 pointer-events-none">
        <Image
          src={FooterBgMobile}
          alt="footer background"
          width={393}
          height={671}
          className="w-full h-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Desktop SVG */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 pointer-events-none">
        <Image
          src={FooterBgDesktop}
          alt="footer background desktop"
          width={1276}
          height={671}
          className="w-full h-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      <div className="relative z-10">
        {/* Form */}
        <div className="relative z-20 pb-8 md:flex md:gap-8 md:items-start">
          <div className="md:flex-1 md:max-w-xl">
            <ContactForm />
          </div>
          <div className="space-y-8 mt-8 md:mt-0 md:w-54 md:shrink-0 md:space-y-6 md:pt-7">
            <div className="md:items-start md:justify-start">
              <h3 className="text-sm font-bold mb-2">Address</h3>
              <p className="text-neutral-400 text-sm">Jakarta, Indonesia</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <h3 className="text-sm font-bold mb-2">Contact</h3>
              <p className="text-neutral-400 text-sm">(+62) 1234567890</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <h3 className="text-sm font-bold mb-5">Social Media</h3>
              <div className="flex gap-3">
                <Image alt="Facebook" src={Facebook} width={40} height={40} />
                <Image alt="Instagram" src={Instagram} width={40} height={40} />
                <Image alt="LinkedInd" src={LinkedInd} width={40} height={40} />
                <Image alt="Tiktok" src={Tiktok} width={40} height={40} />
              </div>
            </div>
            {/* GET IN TOUCH Footer */}
            <div className="pb-12 md:pt-60">
              <h2 className="text-5xl font-bold tracking-tight md:w-90 md:text-5xl">
                GET IN TOUCH
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
