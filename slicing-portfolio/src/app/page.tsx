import Hero from "@/src/components/containers/hero/Hero";
import PathGroup from "@/src/components/containers/pathGroup/PathGroup";
import About from "@/src/components/containers/about/About";
import ToolsSkills from "@/src/components/containers/skills/ToolsSkills";
import SkillComparison from "@/src/components/containers/skills/SkillComparison";
import PortfolioShowcase from "@/src/components/containers/portfolio/PortfolioShowcase.tsx";
import JobExperience from "@/src/components/containers/journey/JobExperience";
import Testtimonials from "@/src/components/containers/testimoni/Testimonials";
import FAQ from "@/src/components/containers/faq/FAQ";
import ContactSection from "@/src/components/containers/contact/ContactSection";


export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>

      <section id="Path Group">
        <PathGroup />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="tools skills" className="spacing md:m-20">
        <ToolsSkills />
      </section>

      <section id="Skill Comparison">
        <SkillComparison />
      </section>

      <section id="Portfolio" className="spacing">
        <PortfolioShowcase />
      </section>

      <section id="My Journey">
        <JobExperience />
      </section>

      <section id="Trusted">
        <Testtimonials />
      </section>

      <section id="Question FAQ">
        <FAQ />
      </section>

      {/* the form is combined with the footer */}
      <section id="Contact Form">
        <ContactSection />
      </section>
    </main>
  );
}
