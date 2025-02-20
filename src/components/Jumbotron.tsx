import React from "react";

const Jumbotron = () => {
  return (
    <section className="h-[650px] bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-blend-multiply">
      <div className="pt-20">
        <div className="group relative mx-auto mb-7 mt-11 block h-[450px] w-full max-w-md rounded-md bg-black">
          {/* Atur margin bawah dan atas */}
          <img
            alt="Profile Background"
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="sm:p-15 lg:p-15 relative p-4">
            <p className="flex items-center justify-center text-sm font-medium uppercase tracking-widest text-white">
              About Me!
            </p>
            <p className="text-xl font-bold text-pink-500 sm:text-2xl">
              Aulia Rifqi
            </p>
            <div className="mt-44">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Hi! I'm a Fullstack Web Developer with a knack for both
                  frontend and backend technologies. Skilled in HTML, CSS,
                  JavaScript, Typescript, React, Chakra UI and Tailwind CSS, I
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
