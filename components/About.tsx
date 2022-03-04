import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Section from "./Section";

type Props = {};

const About: FC<Props> = () => {
  return (
    <Section id="about" className="min-h-[50vh] pt-16 h-full flex flex-col">
      <Fade triggerOnce>
        <h1 className="text-tertiary text-3xl mt-4 mb-8">About Me</h1>
      </Fade>
      <Fade triggerOnce>
        <p className="text-tertiary text-lg sm:text-xl text-justify mb-4 font-light">
          I am currently a Year 2 Computer Science undergraduate at the National
          University of Singapore specializing in software engineering and
          taking a minor in interactive media development.
        </p>
        <p className="text-tertiary text-lg sm:text-xl text-justify font-light">
          I love working on projects that not just look good, but also do good.
          The idea of applying new and exciting technologies to solve real
          problems excites me and pushes me to learn more and to get better at
          my craft.
        </p>
      </Fade>
      <div className="my-6" />
    </Section>
  );
};
export default About;
