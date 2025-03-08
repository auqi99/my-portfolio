import React from "react";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Jumbotron = () => {
  return (
    <section className="h-[650px] w-full bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-blend-multiply">
      <div className="px-4 pt-20 md:px-0">
        {" "}
        {/* Padding hanya untuk mobile */}
        <div className="group relative mx-auto mb-7 mt-11 block h-[450px] w-full max-w-md rounded-md bg-black">
          {/* Gambar lebih kecil di mobile */}
          <img
            alt="Profile Background"
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4">
            <p className="flex items-center justify-center text-sm font-medium uppercase tracking-widest text-white">
              About Me!
            </p>
            <p className="text-lg font-bold text-pink-500 md:text-xl">
              Aulia Rifqi
            </p>
            <a
              href="https://github.com/auqi99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="size-[40px] cursor-pointer hover:text-pink-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/aulia-rifqi-0a910a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-[40px] cursor-pointer hover:text-pink-700" />
            </a>
            <div className="mt-28 md:mt-20">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs text-white md:text-sm">
                  Hi! I'm a Fullstack Web Developer with a knack for both
                  frontend and backend technologies. Skilled in HTML, CSS,
                  JavaScript, TypeScript, React, Chakra UI, and Tailwind CSS, I
                  thrive on creating seamless and dynamic web applications.
                  <br /> My approach combines a deep understanding of user
                  experience with robust backend solutions to build applications
                  that are not only functional but also delightful to use.
                  <br /> Take a look at my portfolio to see how I blend
                  creativity and technical expertise to turn ideas into reality.
                  Let's connect if you're interested in collaboration or have a
                  project in mind!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
