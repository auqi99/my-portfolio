import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <p className="py-20 text-center text-2xl font-semibold md:py-20">
        My hands-on experience
      </p>
      <div className="container mx-auto">
        <div className="p-6 md:p-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                Job Titles and Companies
              </AccordionTrigger>
              <AccordionContent>
                I am a passionate full-stack developer student at Purwadhika,
                immersing myself in the dynamic world of coding and technology
                to craft innovative digital solutions.
              </AccordionContent>
              <AccordionTrigger className="cursor-pointer">
                Timeline
              </AccordionTrigger>
              <AccordionContent>juni 2024 - Present</AccordionContent>
              <AccordionTrigger className="cursor-pointer">
                Responsibilities
              </AccordionTrigger>
              <AccordionContent>
                "I am a dedicated full-stack developer student at Purwadhika,
                actively honing my skills in both front-end and back-end
                development. My key responsibilities include designing and
                building responsive user interfaces, developing robust
                server-side applications, and integrating APIs to create
                seamless web experiences. Through hands-on projects, I
                collaborate with peers to solve real-world problems, ensuring
                clean, efficient, and scalable code. I am committed to
                continuous learning and applying best practices in software
                development to deliver innovative solutions."
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
