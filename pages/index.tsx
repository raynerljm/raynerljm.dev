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

const EMAIL = "raynerljm@gmail.com";
const GITHUB = "https://github.com/raynerljm";
const LINKEDIN = "https://www.linkedin.com/in/raynerljm/";
const LEETCODE = "https://leetcode.com/raypuff/";
const PORTFOLIO_REPO = "https://github.com/raynerljm/raynerljm.dev";

const Home: NextPage = () => {
  return (
    <>
      <main className="bg-dark overflow-x-hidden flex flex-col">
        <div className="hidden sm:flex fixed left-0 bottom-0 h-screen w-24 text-tertiary text-2xl flex-col justify-end items-center my-8 gap-8">
          <Fade delay={400} cascade damping={0.1} direction="left">
            <a href={GITHUB} rel="noreferrer" target="_blank">
              <SiGithub className="hover:text-white transition-all hover:-translate-y-0.5" />
            </a>
            <a href={LINKEDIN} rel="noreferrer" target="_blank">
              <SiLinkedin className="hover:text-white transition-all hover:-translate-y-0.5" />
            </a>
            <a href={LEETCODE} rel="noreferrer" target="_blank">
              <SiLeetcode className="hover:text-white transition-all hover:-translate-y-0.5" />
            </a>
          </Fade>
        </div>
        <div className="hidden fixed right-0 bottom-0 h-screen w-24 text-tertiary sm:flex flex-col items-center justify-end my-8">
          <Fade delay={600} direction="right">
            <a
              className="vertical-text w-max animate-white-glow"
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
      <footer className="w-full flex justify-center bg-dark py-4">
        <Fade direction="up" triggerOnce className="">
          <a
            className="text-center animate-white-glow cursor-pointer"
            href={PORTFOLIO_REPO}
            rel="noreferrer"
            target="_blank"
          >
            Designed & Developed by Rayner
          </a>
        </Fade>
      </footer>
    </>
  );
};

export default Home;
