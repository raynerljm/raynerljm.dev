import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import type { NextPage } from "next";
import About from "../components/About";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import Body from "../components/Body";
import Work from "../components/Work";
import Personal from "../components/Personal";
import Contact from "../components/Contact";
import {
    EMAIL,
    GITHUB,
    LEETCODE,
    LINKEDIN,
    PORTFOLIO_REPO,
} from "../lib/constants";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

const Home: NextPage = () => {
    return (
        <>
            <main className="flex flex-col overflow-x-hidden bg-dark">
                {/* Vertical socials at bottom left */}
                <Socials
                    direction="col"
                    className="fixed left-0 bottom-0 my-8 hidden w-24 items-center justify-center sm:flex"
                    fadeDirection="left"
                />
                {/* Vertical email at bottom right */}
                <div className="fixed right-0 bottom-0 my-8 hidden h-screen w-24 flex-col items-center justify-end text-tertiary sm:flex">
                    <Fade delay={600} direction="right">
                        <a
                            className="vertical-text animate-white-glow w-max"
                            href={`mailto:${EMAIL}`}
                        >
                            {EMAIL}
                        </a>
                    </Fade>
                </div>
                <Navbar />
                <Body>
                    <Landing />
                    <About />
                    <Work />
                    <Personal />
                    <Contact />
                </Body>
            </main>
            <Footer />
        </>
    );
};

export default Home;
