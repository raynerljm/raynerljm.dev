import { FC } from "react";

type Props = {
  className?: string;
  id?: string;
};

const Section: FC<Props> = ({ children, id, className }) => {
  return (
    <>
      <section id={id} className={`${className} px-4 sm:px-24 w-full`}>
        {children}
      </section>
    </>
  );
};
export default Section;
