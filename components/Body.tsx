import { FC } from "react";

type Props = {
  className?: string;
};

const Body: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className={`max-w-5xl mx-auto w-full ${className}`}>{children}</div>
    </>
  );
};
export default Body;
