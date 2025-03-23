import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface CardProjectProps {
  title: string;
  description: string;
  thumbnail: string;
}
const CardProject: FC<CardProjectProps> = ({
  title,
  description,
  thumbnail,
}) => {
  return (
    <div className="space-y-10 rounded-md py-15 text-white">
      <div className="grid grid-cols-1 place-items-center gap-5 text-[10px]">
        <Image src={thumbnail} alt={title} width={250} height={300} />
        <div>{title}</div>
        <Link
          className="cursor-pointer text-blue-400 hover:underline"
          href="/star"
        >
          {description}
        </Link>
      </div>
    </div>
  );
};
export default CardProject;
