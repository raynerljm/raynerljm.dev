import { FC } from "react";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

const Contact: FC = () => {
  const EMAIL = "raynerljm@gmail.com";
  const GITHUB = "https://github.com/raynerljm";
  const LINKEDIN = "https://www.linkedin.com/in/raynerljm/";
  const LEETCODE = "https://leetcode.com/raypuff/";

  return (
    <>
      <Section
        id="contact"
        className="pt-16 h-full flex flex-col gap-8 min-h-[50vh]"
      >
        <Fade triggerOnce>
          <h1 className="text-tertiary text-3xl mt-4">Contact Me</h1>
        </Fade>
        <Fade triggerOnce>
          <p className="text-tertiary text-lg sm:text-xl text-justify mb-4 font-light">
            Thank you for coming to the end of my website and I hope you&apos;ve
            enjoyed your time here!
          </p>
          <p className="text-tertiary text-lg sm:text-xl text-justify mb-4 font-light">
            If you would like to reach out about an opportunity, ask a question,
            or just get to know me, my inbox is always open!
          </p>
        </Fade>
        <Fade direction="up" triggerOnce className="self-center">
          <a
            id="findOutButton"
            className="transition-all duration-500 bg-dark-2 hover:white-glow text-tertiary text-xl py-3 px-6 rounded-md"
            href={`mailto:${EMAIL}`}
          >
            Say Hello
          </a>
        </Fade>
        <div className="flex sm:hidden w-24 text-tertiary text-2xl mt-4 mb-8 gap-8">
          <Fade cascade damping={0.1} direction="left">
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
      </Section>
    </>
  );
};
export default Contact;
