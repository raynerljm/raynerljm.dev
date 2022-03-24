import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { PORTFOLIO_REPO } from "../lib/constants";

const Footer: FC = () => {
    return (
        <footer className="flex w-full justify-center bg-dark py-4">
            <Fade triggerOnce className="">
                <a
                    className="animate-white-glow cursor-pointer text-center duration-500"
                    href={PORTFOLIO_REPO}
                    rel="noreferrer"
                    target="_blank"
                    id="footerText"
                >
                    Designed & Developed by Rayner
                </a>
            </Fade>
        </footer>
    );
};
export default Footer;
