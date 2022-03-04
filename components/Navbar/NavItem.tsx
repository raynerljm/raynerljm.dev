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
        className="bg-dark-2 py-2 px-5 rounded-md transition-all hover:white-glow"
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
