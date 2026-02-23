"use client";

import Link from "next/link";
import Image from "next/image";
import CloseMenu from "@/src/assets/menubar/x-close.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`
      fixed inset-0 z-50
      transition-all duration-100 md:hidden

      ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
      `}
    >
      {/* Background */}
      <div
        onClick={onClose}
        className="
        absolute 
        bg-black/20
        "
      />

      {/* Panel - WITH BLUR EFFECT */}
      <div
        className={`
        absolute top-4 left-4 right-4 bottom-10
        max-w-xl mx-auto 
        p-4
        rounded-4xl 
        bg-[#0F2F33]/40 
        backdrop-blur-md 
        border border-cyan-400/10 
        transition-all duration-200
        
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-white">Edwin</span>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image
              alt="Close Menu"
              src={CloseMenu}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Menu */}
        <nav>
          <ul className="space-y-6">
            <li>
              <Link 
                href="#about" 
                onClick={onClose} 
                className="text-md text-white hover:text-cyan-400 transition-colors block"
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                href="#skill" 
                onClick={onClose} 
                className="text-md text-white hover:text-cyan-400 transition-colors block"
              >
                Skill
              </Link>
            </li>

            <li>
              <Link 
                href="#projects" 
                onClick={onClose} 
                className="text-md text-white hover:text-cyan-400 transition-colors block"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link 
                href="#faq" 
                onClick={onClose} 
                className="text-md text-white hover:text-cyan-400 transition-colors block"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link 
                href="#contact" 
                onClick={onClose} 
                className="text-md text-white hover:text-cyan-400 transition-colors block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}