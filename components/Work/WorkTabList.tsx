import { FC } from "react";
import { WorkExperience } from "./Work.types";
import { Tab } from "@headlessui/react";

type Props = {
  work: WorkExperience;
};

const WorkTabList: FC<Props> = ({ work }) => {
  return (
    <Tab
      className={({ selected }) =>
        `py-3 px-4 w-24 text-base sm:text-lg sm:w-32 text-center sm:text-left transition-all border-b-2 sm:border-l-2 sm:border-b-0 font-light ${
          selected
            ? "bg-dark-2 text-white border-white"
            : "text-tertiary border-tertiary hover:text-white hover:bg-dark-2"
        }`
      }
    >
      {work.company}
    </Tab>
  );
};

export default WorkTabList;
