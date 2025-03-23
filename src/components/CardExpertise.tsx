import { FC } from "react";
interface CardExpertiseProps {
  icon: any;
  skill: string;
}
const CardExpertise: FC<CardExpertiseProps> = ({ icon: Icon, skill }) => {
  return (
    <div className="space-y-10 rounded-md py-10 text-white">
      <div className="grid grid-cols-1 gap-5 text-[25px]">
        <div className="flex items-center justify-center">{Icon}</div>
        <p className="text-center font-serif">{skill}</p>
      </div>
    </div>
  );
};
export default CardExpertise;