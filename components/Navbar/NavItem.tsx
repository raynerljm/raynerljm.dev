import React, { FC } from "react";

type Props = {
  href?: string;
  closeNav?: () => void;
};
export const NavItem: FC<Props> = ({ children, href, closeNav }) => {
  return (
    <a href={href} onClick={closeNav}>
      <ul className="cursor-pointer animate-white-glow">{children}</ul>
    </a>
  );
};

export default NavItem;
