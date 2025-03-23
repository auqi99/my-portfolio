import CardExpertise from "./CardExpertise";
import {
  SiChakraui,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const data = [
  { skill: "JavaScript", icon: <SiJavascript /> },
  { skill: "ReactJS", icon: <SiReact /> },
  { skill: "Chakra UI", icon: <SiChakraui /> },
  { skill: "TailwindCSS", icon: <SiTailwindcss /> },
  { skill: "MySQL", icon: <SiMysql /> },
  { skill: "Node.js", icon: <SiNodedotjs /> },
  { skill: "Next.js", icon: <SiNextdotjs /> },
  { skill: "HTML", icon: <SiHtml5 /> },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-20"
    >
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {data.map((expertise, index) => {
          return (
            <CardExpertise
              key={index}
              icon={expertise.icon}
              skill={expertise.skill}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;