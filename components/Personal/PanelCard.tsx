import { Transition } from "@headlessui/react";
import { FC, useState } from "react";
import { Achievement } from "./Personal.types";

type Props = {
  idx: number;
  achievement: Achievement;
};

const PanelCard: FC<Props> = ({ idx, achievement }) => {
  const [expanded, setExpanded] = useState(false);
  const isLeft = idx % 2 === 0 || true;

  const generateTitle = (achievement: Achievement) => {
    const className =
      "text-white text-xl link-underline link-underline-black w-fit";

    if (achievement.link !== "") {
      return (
        <a
          className={className}
          href={achievement.link}
          rel="noreferrer"
          target="_blank"
        >
          {achievement.title}
        </a>
      );
    } else {
      return <h1 className={className}>{achievement.title}</h1>;
    }
  };

  return (
    <>
      <div
        className={`flex flex-col relative ${!isLeft && "self-end items-end"}`}
      >
        {achievement.image !== "" && (
          <div className="w-3/4 sm:w-1/2 self-center mb-2 overflow-hidden rounded-md">
            <a href={achievement.link} rel="noreferrer" target="_blank">
              <img
                className="w-fit sm:grayscale grayscale-0 hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                src={achievement.image}
                alt={achievement.title}
              />
            </a>
          </div>
        )}
        {generateTitle(achievement)}
        {achievement.subtitle !== "" && (
          <h2 className="text-tertiary font-light">{achievement.subtitle}</h2>
        )}
        <h2 className="text-tertiary font-light">{achievement.duration}</h2>
        {achievement.descriptions.length > 0 && (
          <div
            className={`relative mt-2 bg-dark-2 cursor-pointer hover:text-white transition-all ${
              expanded
                ? "w-full h-full p-6"
                : "delay-100 h-12 w-36 py-3 px-6 items-center"
            } font-light text-tertiary text-opacity-80 rounded-md shadow`}
            onClick={() => setExpanded(!expanded)}
          >
            <Transition
              show={expanded}
              enter="transition-all delay-100"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 scale-100"
              leave="transition-all"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
              className="flex flex-col gap-3"
            >
              <>
                {achievement.descriptions.map((description, idx) => (
                  <p
                    className={`${isLeft ? "text-left" : "text-right"}`}
                    key={idx}
                  >
                    {description}
                  </p>
                ))}
              </>
            </Transition>
            <Transition
              show={!expanded}
              enter="transition-all delay-100"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 scale-100"
              leave="transition-all"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
              className="text-center"
            >
              View More
            </Transition>
          </div>
        )}
      </div>
      <hr className="border-tertiary opacity-60 -my-2" />
    </>
  );
};
export default PanelCard;
