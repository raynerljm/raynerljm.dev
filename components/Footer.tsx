import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { PORTFOLIO_REPO } from "../lib/constants";

const Footer: FC = () => {
    return (
        <footer className="flex w-full justify-center bg-dark py-4">
            <Fade direction="up" triggerOnce className="">
                <a
                    className="animate-white-glow cursor-pointer text-center"
                    href={PORTFOLIO_REPO}
                    rel="noreferrer"
                    target="_blank"
                >
                    Designed & Developed by Rayner
                </a>
            </Fade>
        </footer>
    );
};
export default Footer;
