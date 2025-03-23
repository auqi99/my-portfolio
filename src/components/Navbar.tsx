"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcAcceptDatabase } from "react-icons/fc";
import { Button } from "./ui/button";

const Navbar = () => {
  const handleScrollToContact = () => {
    window.location.hash = "#contact";
    history.replaceState(null, "", " ");
  };

  return (
    <nav className="bg-opacity-90 sticky top-0 left-0 z-20 w-full bg-black px-6 py-4 text-white shadow-md backdrop-blur-md">
      <div className="container m-auto flex items-center justify-between">
        <a href="#" className="font-serif text-3xl font-semibold text-gray-500">
          Auqi
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="motion-preset-slide-right motion-duration-4500"
          >
            About Me
          </a>
          <a
            href="#project"
            className="motion-preset-slide-right motion-duration-8500"
          >
            Portofolio
          </a>
          <a
            href="#experience"
            className="motion-preset-slide-right motion-duration-10500"
          >
            Experience
          </a>
          <a
            href="#expertise"
            className="motion-preset-slide-right motion-duration-14000"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="motion-preset-slide-right motion-duration-20000"
          >
            Testimonials
          </a>
        </div>

        <Button
          variant="outline"
          className="font-1xl hidden cursor-pointer bg-gray-900 font-serif font-semibold text-green-600 md:block"
          onClick={handleScrollToContact}
        >
          Contact Me
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="block text-3xl md:hidden">
            <FcAcceptDatabase />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="#">About me</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#project">Project</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#experience">Experience</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#expertise">Skills</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#testimonials">Testimonials</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact">Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
