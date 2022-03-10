import { motion } from "framer-motion";
import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Section from "./Section";
const RaynerLJM: FC = () => {
    return (
        <Fade direction="up" delay={800} triggerOnce>
            <div className="flex flex-col justify-center">
                <div>
                    <div className="left">
                        <div className="content">
                            <span className="spanContent select-none text-tertiary text-opacity-70">
                                raynerljm
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <span className="spanContent select-none text-white">
                                raynerljm
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

const Landing: FC = () => {
    return (
        <Section
            id="home"
            className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-secondary to-dark"
        >
            <RaynerLJM />
            <div className="my-4" />
            <h1 className="h-24 w-full text-center text-xl leading-loose text-tertiary text-opacity-90 sm:h-40 sm:w-3/4 sm:text-4xl sm:leading-snug">
                <section className="flex flex-col items-center">
                    <div className="inline-block">
                        <div className="typed-out">Hey! My name is Rayner,</div>
                    </div>
                    <div className="inline-block">
                        <div className="typed-out-2">
                            and I love building software
                        </div>
                    </div>
                    <div className="ml-1 inline-block">
                        <div className="typed-out-3">
                            that makes a positive difference.
                        </div>
                    </div>
                </section>
            </h1>
            <div className="my-8" />
            <Fade direction="up" delay={4000} triggerOnce>
                <a
                    id="findOutButton"
                    className="hover:white-glow rounded-md bg-dark-2 py-3 px-6 text-xl text-tertiary transition-all duration-500"
                    href="#about"
                >
                    Find out more
                </a>
            </Fade>
        </Section>
    );
};

export default Landing;
