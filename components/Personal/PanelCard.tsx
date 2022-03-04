import { FC } from "react";
import { Achievement } from "./Personal.types";

type Props = {
  idx: number;
  achievement: Achievement;
};

const PanelCard: FC<Props> = ({ idx, achievement }) => {
  return (
    <>
      <div
        className={`flex flex-col relative ${
          idx % 2 === 0 ? "items-start" : "items-end"
        }`}
      >
        <h1 className="text-white text-xl">{achievement.title}</h1>
        <h2 className="text-tertiary font-light">{achievement.subtitle}</h2>
        <h2 className="text-tertiary font-light">{achievement.duration}</h2>
        {/* <img
          className="w-1/2 absolute my-auto top-0 bottom-0 right-0 opacity-70 grayscale hover:grayscale-0"
          src={achievement.image}
          alt={achievement.title}
        /> */}
        <div className="w-3/4 sm:w-1/2 self-center my-2 overflow-hidden">
          <img
            className="w-full sm:grayscale gray-scale-0 hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
            src={achievement.image}
            alt={achievement.title}
          />
        </div>
        <div className="relative z-10 bg-dark-2 w-full font-light text-tertiary text-opacity-80 p-6 rounded-md shadow flex flex-col gap-3">
          {achievement.descriptions.map((description, idx) => (
            <p className="" key={idx}>
              {description}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
export default PanelCard;
