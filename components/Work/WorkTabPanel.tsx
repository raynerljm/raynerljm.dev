import { Tab, Transition } from "@headlessui/react";
import { FC } from "react";
import { WorkExperience } from "./Work.types";
import { VscDebugBreakpointData, VscDebug } from "react-icons/vsc";
import TechIcon from "../TechIcon";

type Props = {
  work: WorkExperience;
};

const WorkTabPanel: FC<Props> = ({ work }) => {
  return (
    <Tab.Panel className="py-3 px-4 w-full">
      {({ selected }) => (
        <Transition
          show={selected}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <h1 className="text-tertiary text-xl">
            {work.role} <span className="text-white">@</span>{" "}
            <a
              className="text-white link-underline link-underline-black"
              href={work.companyLink}
            >
              {work.company}
            </a>
          </h1>
          <h2 className="text-tertiary font-light mt-2">{work.duration}</h2>
          <ul className="mt-4 text-sm max-w-xl flex flex-col gap-2">
            {work.responsibilities.map((res, idx) => (
              <li
                key={idx}
                className="font-light text-tertiary text-opacity-80 flex"
              >
                <VscDebug className="block ml-2 mr-4 mt-1 text-xs" />
                <p className="w-full">{res}</p>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3 flex-nowrap mt-4">
            {work.technologies.map((technology, idx) => (
              <TechIcon technology={technology} key={idx} />
            ))}
          </ul>
        </Transition>
      )}
    </Tab.Panel>
  );
};

export default WorkTabPanel;
