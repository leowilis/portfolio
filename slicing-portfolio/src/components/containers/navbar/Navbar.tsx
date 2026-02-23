"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Skill", href: "#Skill Comparison" },
  { name: "Projects", href: "#Portfolio" },
  { name: "FAQ", href: "#Question FAQ" },
  { name: "Contact", href: "#Contact Form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full flex items-center px-6 py-2 bg-[#0F2F33]/70 backdrop-blur-md rounded-full border md:max-w-[528px] border-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.05)]">
          {/* Logo */}
          <h1 className="text-white font-bold text-xl">Edwin</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm hover:text-cyan-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-white md:hidden ml-auto"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
