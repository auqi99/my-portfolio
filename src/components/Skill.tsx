import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiChakraui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { LiaDocker } from "react-icons/lia";

const Skill = () => {
  return (
    <div id="skills" className="h-screen bg-black">
      <div className="ml-[600px] mt-20 inline-block animate-pulse rounded-md bg-gradient-to-r from-purple-950 to-blue-950 p-2 text-center text-sm font-bold text-black shadow-md">
        My Skills
      </div>
      <div className="mt-24 flex flex-wrap justify-center gap-8 text-[#212fd1]">
        <IoLogoJavascript size={75} className="animate-bounce" />
        <SiTypescript size={75} className="animate-pulse" />
        <ImHtmlFive size={75} className="animate-bounce" />
        <SiCss3 size={75} className="animate-pulse" />
        <GrReactjs size={75} className="duration-[3000ms] animate-spin" />
        <div className="animate-fade-in rounded-lg border border-[#212fd1] bg-[#212fd1] px-3 py-4 text-3xl text-stone-950">
          expressJS
        </div>
        <div className="mt-24 flex flex-wrap justify-center gap-8">
          <SiChakraui size={75} className="animate-pulse" />
          <SiTailwindcss size={75} className="animate-bounce" />
          <SiBootstrap size={75} className="animate-fadeIn" />
          <SiMysql size={75} className="animate-wiggle" />
          <FaNodeJs size={75} className="animate-pulse" />
          <RiNextjsFill size={75} className="animate-bounce" />
          <LiaDocker size={75} className="animate-wiggle" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
