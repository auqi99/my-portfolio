"use client";

import Image from "next/image";
import { FC } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface CardTestimonialsProps {
  thumbnail: string;
  name: string;
  icon: React.ReactNode | React.ReactNode[];
  title: string;
  description: string;
}

const ThreeDCardDemo: FC<CardTestimonialsProps> = ({
  thumbnail,
  title,
  description,
  name,
  icon,
}) => {
  return (
    <CardContainer className="inter-var sm:gap-4 gap-1"> 
      <CardBody className="group/card relative h-[250px] w-[250px] rounded-lg border border-black/[0.1] bg-black p-3 sm:p-4 sm:w-[22rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="30"
          className="text-lg font-semibold dark:text-white text-center"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="mt-1 max-w-xs text-xs text-neutral-500 dark:text-neutral-300 text-center"
        >
          {description}
        </CardItem>
        <CardItem translateZ="80" className="mt-2 flex justify-center sm:mt-3">
          <Image
            src={thumbnail}
            height={100}
            width={150}
            className="h-[90px] w-[140px] sm:h-[100px] sm:w-[150px] rounded-lg object-cover group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex items-center justify-center mt-1 sm:mt-2">{icon}</div>
        <div className="mt-1 text-center text-xs font-bold dark:text-white sm:mt-2">
          {name}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
