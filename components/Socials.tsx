import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { SiGithub, SiLinkedin, SiLeetcode, SiTelegram } from "react-icons/si";
import { GITHUB, LEETCODE, LINKEDIN, TELEGRAM } from "../lib/constants";

type Props = {
    direction: "row" | "col";
    className?: string;
    fadeDirection: "left" | "up";
};

const Socials: FC<Props> = ({ direction, className, fadeDirection }) => {
    const anchorClassName =
        "transition-all hover:-translate-y-0.5 hover:text-white";

    return (
        <div
            className={`flex ${
                direction === "row" ? "flex-row" : "flex-col"
            } gap-8 text-2xl text-tertiary ${className}`}
        >
            <Fade cascade damping={0.1} direction={fadeDirection}>
                <a href={LEETCODE} rel="noreferrer" target="_blank">
                    <SiLeetcode className={anchorClassName} />
                </a>
                <a href={TELEGRAM} rel="noreferrer" target="_blank">
                    <SiTelegram className={anchorClassName} />
                </a>
                <a href={LINKEDIN} rel="noreferrer" target="_blank">
                    <SiLinkedin className={anchorClassName} />
                </a>

                <a href={GITHUB} rel="noreferrer" target="_blank">
                    <SiGithub className={anchorClassName} />
                </a>
            </Fade>
        </div>
    );
};

export default Socials;
