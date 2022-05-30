import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Section from "./Section";

type Props = {};

const About: FC<Props> = () => {
    return (
        <Section id="about" className="flex h-full min-h-[50vh] flex-col pt-16">
            <Fade triggerOnce>
                <h1 className="mt-4 mb-8 text-3xl text-tertiary">About Me</h1>
            </Fade>
            <Fade triggerOnce>
                <p className="mb-4 text-justify text-lg font-light text-tertiary sm:text-xl">
                    I am currently a going Year 3 Computer Science undergraduate
                    at the National University of Singapore specializing in
                    software engineering and taking a minor in interactive media
                    development.
                </p>
                <p className="text-justify text-lg font-light text-tertiary sm:text-xl">
                    I love working on projects that not just look good, but also
                    do good. The idea of applying new and exciting technologies
                    to solve real problems excites me and pushes me to learn
                    more and to get better at my craft.
                </p>
            </Fade>
            <div className="my-6" />
        </Section>
    );
};
export default About;
