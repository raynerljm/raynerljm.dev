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
                `border-b-2 py-3 px-4 text-center text-base font-light transition-all sm:w-32 sm:border-l-2 sm:border-b-0 sm:text-left sm:text-lg ${
                    selected
                        ? "border-white bg-dark-2 text-white"
                        : "border-tertiary text-tertiary hover:bg-dark-2 hover:text-white"
                }`
            }
        >
            {work.company}
        </Tab>
    );
};

export default WorkTabList;
