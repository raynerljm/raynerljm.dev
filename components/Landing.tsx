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
              <span className="spanContent text-tertiary text-opacity-70 select-none">
                raynerljm
              </span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanContent text-white select-none">
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
      className="h-screen flex flex-col justify-center items-center"
    >
      <RaynerLJM />
      <div className="my-4" />
      <h1 className="text-xl sm:text-4xl text-tertiary text-opacity-90 text-center leading-loose sm:leading-snug w-full sm:w-3/4 h-24 sm:h-40">
        <section className="flex flex-col items-center">
          <div className="inline-block">
            <div className="typed-out">Hey! My name is Rayner,</div>
          </div>
          <div className="inline-block">
            <div className="typed-out-2">and I love building software</div>
          </div>
          <div className="inline-block ml-1">
            <div className="typed-out-3">that makes a positive difference.</div>
          </div>
        </section>
      </h1>
      <div className="my-8" />
      <Fade direction="up" delay={4000} triggerOnce>
        <a
          id="findOutButton"
          className="transition-all duration-500 bg-dark-2 hover:text-white text-tertiary text-xl py-3 px-6 rounded-md"
          href="#about"
        >
          Find out more
        </a>
      </Fade>
    </Section>
  );
};

export default Landing;
