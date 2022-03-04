import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { NavItemType } from "./Navbar.types";
import { NavItem } from "./NavItem";

type Props = {
  className?: string;
  navItems: NavItemType[];
  closeNav?: () => void;
};

export const NavItems: FC<Props> = ({ className, navItems, closeNav }) => {
  return (
    <li className={`flex gap-8 ml-auto text-tertiary ${className}`}>
      <Fade direction="down" cascade delay={200} damping={0.1} triggerOnce>
        {navItems.map((item) => (
          <NavItem href={item.href} key={item.name} closeNav={closeNav}>
            {item.name}
          </NavItem>
        ))}
      </Fade>
    </li>
  );
};
export default NavItem;
