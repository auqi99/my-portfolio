import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { CgMenuBoxed } from "react-icons/cg";
import weiImage from "./images/wei.png";

const Navbar = () => {
  return (
    <div className="fixed start-0 top-0 z-20 h-16 w-full dark:border-gray-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
        <a href="#" className="flex items-center space-x-3">
          <Image
            src={weiImage}
            alt="gwe"
            width={48}
            height={48}
            className="size-12"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Auqi
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0">
          <a
            href="#contact"
            className="hidden w-auto rounded-lg bg-blue-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:block mr-6"
          >
            Contact Me
          </a>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="mr-4 text-3xl text-white md:hidden focus:outline-none">
            <CgMenuBoxed />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-950 text-white">
            <DropdownMenuLabel>menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <a href="#">
              <DropdownMenuItem>About Me</DropdownMenuItem>
            </a>
            <a href="#projects">
              <DropdownMenuItem>Projects</DropdownMenuItem>
            </a>
            <a href="#testimonials">
              <DropdownMenuItem>Testimonials</DropdownMenuItem>
            </a>
            <a href="#skills">
              <DropdownMenuItem>Skills</DropdownMenuItem>
            </a>
            <a href="#contact">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                About Me
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
