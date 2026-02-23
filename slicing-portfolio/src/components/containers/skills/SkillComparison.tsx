import Image from "next/image";
import Check from "@/src/assets/icon/check.svg";
import Cross from "@/src/assets/icon/cross.svg";
import BgLine from "@/src/assets/icon/bg-line.svg";
import BgLine2 from "@/src/assets/icon/bg-line2.svg";

const skills = [
  { name: "React Expert", withMe: true, other: false },
  { name: "Pixel Perfect", withMe: true, other: false },
  { name: "TypeScript Proficiency", withMe: true, other: false },
  { name: "Clean, Maintainable Code", withMe: true, other: false },
  { name: "Performance Optimization", withMe: true, other: false },
  { name: "Responsive Website", withMe: true, other: false },
  { name: "UI Design Proficiency (Figma)", withMe: true, other: false },
];

export default function SkillComparison() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-20">
      {/* Gradient teal */}
      <div
        className="absolute bottom-0 left-0 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(20,155,176,0.45) 10%, transparent 80%)",
        }}
      />

      {/* Vector Line */}
      <Image
        alt="bg-line"
        src={BgLine}
        className="absolute bottom-0 left-0 pointer-events-none opacity-80"
        width={800}
        height={800}
      />
      <Image
        alt="bg-line2"
        src={BgLine2}
        className="absolute bottom-0 left-0 pointer-events-none opacity-80"
        width={800}
        height={800}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl m-2 font-bold mb-4 md:text-5xl">
            Not Your Typical Frontend Developer
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-neutral-800/30 overflow-hidden bg-black md:max-w-7xl md:mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_384px_384px]">
            <div className="p-4 font-semibold text-xl">Skill</div>
            <div className="p-4 font-semibold text-xl bg-primary-400 border-b border-white/30">
              With Me
            </div>
            <div className="pt-8 p-3 font-semibold text-xl">Other</div>
          </div>

          {/* Table Body */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_384px_384px]"
            >
              <div className="p-4 flex items-center text-sm border-t border-neutral-800">
                {skill.name}
              </div>

              <div className="p-4 flex bg-primary-400 border-y border-t border-white/30">
                <Image
                  alt="Check"
                  src={Check}
                  width={24}
                  height={24}
                  className="md:w-10 md:h-10"
                />
              </div>

              <div className="p-4 flex border-t border-neutral-800">
                <Image
                  alt="Cross"
                  src={Cross}
                  width={24}
                  height={24}
                  className="md:w-10 md:h-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
