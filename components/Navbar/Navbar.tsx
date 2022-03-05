import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import { useScrollDirection } from "react-use-scroll-direction";
import { NAV_ITEMS } from "./Navbar.constants";
import { NavItems } from "./NavItems";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const { scrollDirection } = useScrollDirection();

  // Hide navbar on scroll
  useEffect(() => {
    if (scrollDirection === "UP") {
      setNavbarOpen(true);
    } else if (scrollDirection === "DOWN") {
      setNavbarOpen(false);
    }
  }, [scrollDirection]);

  // RAYNERLJM animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      let normalizedPosition = e.pageX / (width / 2) - 1 - 0.47;
      let speed = 50 * normalizedPosition;
      const spans: NodeListOf<HTMLSpanElement> =
        document.querySelectorAll(".spanContent");
      spans.forEach((span) => {
        span.style.transform = `translate(${speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hide RAYNERLJM and Find Out More Button when sidebar is open
  // For some reason these items have higher z-index than overlay and sidebar
  useEffect(() => {
    const spans: NodeListOf<HTMLSpanElement> =
      document.querySelectorAll(".spanContent");
    spans.forEach((span) => {
      span.style.opacity = isOpen ? "0%" : "100%";
    });
    const findOutButton: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("#findOutButton");
    findOutButton.forEach((button) => {
      button.style.opacity = isOpen ? "0%" : "100%";
    });
  }, [isOpen]);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 h-16 w-full flex items-center px-8 bg-dark bg-opacity-80 backdrop-blur z-30 transition-all duration-500 ${
        isNavbarOpen ? "translate-y-0" : "delay-200 -translate-y-16"
      }`}
    >
      <Fade direction="down" triggerOnce>
        <a
          className="uppercase font-bold text-lg select-none cursor-pointer animate-white-glow"
          href="#home"
        >
          raynerljm
        </a>
      </Fade>
      {/* Desktop Navbar */}
      <NavItems className={`hidden sm:flex`} navItems={NAV_ITEMS} />

      {/* Mobile Hamburger Icon */}
      <Fade
        direction="down"
        className="ml-auto sm:hidden z-50"
        delay={200}
        triggerOnce
      >
        <div
          className={`flex flex-col justify-between h-5 w-6 ml-auto sm:hidden cursor-pointer z-50 ${
            isOpen ? "absolute -top-2 right-0" : ""
          }`}
          onClick={toggleNav}
        >
          <div
            className={`w-full h-1 bg-tertiary rounded-full transition-all ${
              isOpen ? " rotate-45 translate-y-2" : ""
            }`}
          />
          {!isOpen && <div className="w-full h-1 bg-tertiary rounded-full" />}
          <div
            className={`w-full h-1 bg-tertiary rounded-full transition-all ${
              isOpen ? " -rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </Fade>
      {/* Mobile Dark Overlay */}
      {isOpen && (
        <Fade>
          <div
            className="absolute z-30 top-0 left-0 h-screen w-screen bg-black opacity-80 transition-all"
            onClick={toggleNav}
          />
        </Fade>
      )}
      {/* Mobile Sidebar */}
      <motion.nav
        className="absolute z-40 h-screen w-36 top-0 right-0 bg-dark px-4 pt-16"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
      >
        <NavItems
          className="flex flex-col text-xl"
          navItems={NAV_ITEMS}
          closeNav={() => setOpen(false)}
        />
      </motion.nav>
    </nav>
  );
};

export default Navbar;
