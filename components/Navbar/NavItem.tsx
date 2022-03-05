import React, { FC } from "react";

type Props = {
  href?: string;
  closeNav?: () => void;
};
export const NavItem: FC<Props> = ({ children, href, closeNav }) => {
  if (children === "Resume") {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="animate-white-glow cursor-pointer sm:bg-dark-2 sm:py-2 sm:px-5 sm:rounded-md sm:transition-all sm:hover:white-glow"
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} onClick={closeNav}>
      <ul className="cursor-pointer animate-white-glow">{children}</ul>
    </a>
  );
};

export default NavItem;
