/* eslint-disable @next/next/no-img-element */
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
                className={`relative flex flex-col ${
                    !isLeft && "items-end self-end"
                }`}
            >
                {achievement.image !== "" && (
                    <div className="group relative mb-2 w-3/4 self-center overflow-hidden rounded-md sm:w-1/2">
                        <img
                            className="w-fit cursor-pointer transition-all duration-500 group-hover:scale-105"
                            src={achievement.image}
                            alt={achievement.title}
                        />
                        <a
                            href={achievement.link}
                            rel="noreferrer"
                            target="_blank"
                            className="absolute top-0 h-full w-full bg-violet-800 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-0 sm:bg-opacity-50"
                        />
                    </div>
                )}
                {generateTitle(achievement)}
                {achievement.subtitle !== "" && (
                    <h2 className="font-light text-tertiary">
                        {achievement.subtitle}
                    </h2>
                )}
                <h2 className="font-light text-tertiary">
                    {achievement.duration}
                </h2>
                {achievement.descriptions.length > 0 && (
                    <div
                        className={`relative mt-2 cursor-pointer bg-dark-2 transition-all hover:text-white ${
                            expanded
                                ? "h-full w-full p-6"
                                : "h-12 w-36 items-center py-3 px-6 delay-100"
                        } rounded-md font-light text-tertiary text-opacity-80 shadow`}
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
                                {achievement.descriptions.map(
                                    (description, idx) => (
                                        <p
                                            className={`${
                                                isLeft
                                                    ? "text-left"
                                                    : "text-right"
                                            }`}
                                            key={idx}
                                        >
                                            {description}
                                        </p>
                                    )
                                )}
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
            <hr className="-my-2 border-tertiary opacity-60" />
        </>
    );
};
export default PanelCard;
