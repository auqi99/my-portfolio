import Contact from "@/components/Contact";
import Jumbotron from "@/components/Jumbotron";
import Projects from "@/components/Project";
import Skill from "@/components/Skill";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Projects />
      <Testimonials />
      <Skill />
      <Contact />
    </main>
  );
}
