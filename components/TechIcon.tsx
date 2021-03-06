import { FC } from "react";
import {
  SiTypescript,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDjango,
  SiTailwindcss,
  SiMaterialui,
  SiUnity,
  SiSass,
  SiPm2,
  SiNginx,
  SiNodedotjs,
  SiFigma,
  SiJest,
  SiStyledcomponents,
  SiCss3,
  SiSolidity,
  SiPython,
  SiJavascript,
  SiJava,
} from "react-icons/si";

type Props = { technology: string };

const TechIcon: FC<Props> = ({ technology }) => {
  const className =
    "text-tertiary text-xl cursor-pointer hover:text-white transition-all";
  return (
    <div className="relative flex flex-col items-center group">
      {technology === "TypeScript" ? (
        <SiTypescript className={className} />
      ) : technology === "Firebase" ? (
        <SiFirebase className={className} />
      ) : technology === "React" ? (
        <SiReact className={className} />
      ) : technology === "Next.js" ? (
        <SiNextdotjs className={className} />
      ) : technology === "Postgresql" ? (
        <SiPostgresql className={className} />
      ) : technology === "Django" ? (
        <SiDjango className={className} />
      ) : technology === "Tailwind CSS" ? (
        <SiTailwindcss className={className} />
      ) : technology === "Material UI" ? (
        <SiMaterialui className={className} />
      ) : technology === "Unity" ? (
        <SiUnity className={className} />
      ) : technology === "SCSS" ? (
        <SiSass className={className} />
      ) : technology === "PM2" ? (
        <SiPm2 className={className} />
      ) : technology === "Nginx" ? (
        <SiNginx className={className} />
      ) : technology === "Node.js" ? (
        <SiNodedotjs className={className} />
      ) : technology === "Figma" ? (
        <SiFigma className={className} />
      ) : technology === "Jest" ? (
        <SiJest className={className} />
      ) : technology === "Styled Components" ? (
        <SiStyledcomponents className={className} />
      ) : technology === "CSS" ? (
        <SiCss3 className={className} />
      ) : technology === "Solidity" ? (
        <SiSolidity className={className} />
      ) : technology === "Python" ? (
        <SiPython className={className} />
      ) : technology === "JavaScript" ? (
        <SiJavascript className={className} />
      ) : technology === "Java" ? (
        <SiJava className={className} />
      ) : null}
      <span className="invisible group-hover:visible absolute text-[0.65rem] -bottom-5 text-tertiary group-hover:text-white scale-0 group-hover:scale-100 transition-all whitespace-nowrap">
        {technology}
      </span>
    </div>
  );
};
export default TechIcon;
