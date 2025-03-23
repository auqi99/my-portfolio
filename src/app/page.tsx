import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Jumbotron from "@/components/Jumbotron";
import Project from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Project />
      <Experience />
      <Expertise />
      <Testimonials />
      <Contact />
    </div>
  );
}
