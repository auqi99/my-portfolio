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
    <section id="skills" className="container m-auto bg-black py-20 md:py-32">
      <p className="animate-bounce text-center text-2xl font-bold text-white drop-shadow-lg">
        Skills That Define Me
      </p>

      <div className="mx-28 mt-12 grid grid-cols-2 gap-4 text-center text-blue-800 md:mt-20 md:grid-cols-6">
        <IoLogoJavascript className="h-14 w-14 animate-bounce md:h-20 md:w-20" />
        <SiTypescript className="Fanimate-pulse h-14 w-14 md:h-20 md:w-20" />
        <ImHtmlFive className="md:h-20animate-bounce h-14 w-14 md:w-20" />
        <SiCss3 className="md:h-20w-12 h-14 w-14 animate-pulse md:h-20 md:w-20" />
        <GrReactjs className="md:h-20duration-[3000ms] h-14 w-14 animate-spin md:w-20" />
        <div className="h-10 rounded-lg border border-[#212fd1] bg-[#212fd1] px-1 py-2 text-sm text-stone-950 md:h-auto md:text-3xl">
          expressJS
        </div>
      </div>
      <div className="item-center mx-28 mt-14 grid grid-cols-2 gap-4 text-blue-800 md:grid-cols-7">
        <SiChakraui className="md:h-20animate-pulse h-14 w-14 md:w-20" />
        <SiTailwindcss className="md:h-20animate-bounce h-14 w-14 md:w-20" />
        <SiBootstrap className="md:h-20animate-fadeIn h-14 w-14 md:w-20" />
        <SiMysql className="md:h-20animate-wiggle h-14 w-14 md:w-20" />
        <FaNodeJs className="md:h-20animate-pulse h-14 w-14 md:w-20" />
        <RiNextjsFill className="md:h-20animate-bounce h-14 w-14 md:w-20" />
        <LiaDocker className="md:h-20animate-wiggle h-14 w-14 text-blue-800 md:w-20" />
      </div>
    </section>
  );
};

export default Skill;
