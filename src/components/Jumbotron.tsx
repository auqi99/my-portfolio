"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { sendGAEvent } from "@/utils/google-analytics";

const Jumbotron = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* KOLOM 1 */}
          <div className="flex items-center">
            <div className="motion-preset-slide-right motion-duration-3000 mx-10 space-y-4 font-serif">
              <p className="font-sans text-2xl font-semibold">
                Hi! I'm Aulia Rifqi
              </p>

              <p className="motion-preset-typewriter-[24]">
                A Fullstack Web Developer with a knack for both frontend and
                backend technologies. Skilled in HTML, CSS, JavaScript,
                TypeScript, React, Chakra UI, and Tailwind CSS, I thrive on
                creating seamless and dynamic web applications.
                <br /> My approach combines a deep understanding of user
                experience with robust backend solutions to build applications
                that are not only functional but also delightful to use.
                <br /> Take a look at my portfolio to see how I blend creativity
                and technical expertise to turn ideas into reality.
              </p>

              <p className="motion-preset-seesaw">
                Let's connect if you're interested in collaboration or have a
                project in mind!
              </p>

              <p className="flex items-center gap-4 text-3xl">
                <a
                  href="https://www.linkedin.com/in/aulia-rifqi-0a910a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  onClick={() =>
                    sendGAEvent(
                      "click_linkedin",
                      "linkedin_profile",
                      "social_media",
                    )
                  }
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/auqi99"
                  target="_blank"
                  onClick={() =>
                    sendGAEvent(
                      "click_github",
                      "github_profile",
                      "social_media",
                    )
                  }
                >
                  <BsGithub />
                </a>
              </p>
            </div>
          </div>

          {/* KOLOM 2 */}
          <div>
            <div className="motion-preset-slide-up motion-duration-5000 relative flex w-full justify-center px-6 py-12 md:px-0 md:py-0">
              <Image
                src="/gwe.svg"
                alt="gwe"
                style={{ objectFit: "cover" }}
                width={380}
                height={380}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
