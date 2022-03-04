import { FC } from "react";
import { Tab } from "@headlessui/react";

type Props = {
  tab: string;
};

const PersonalTabList: FC<Props> = ({ tab }) => {
  return (
    <>
      <Tab
        className={({ selected }) =>
          `py-2 px-3 w-24 text-base text-center transition-all border-b-2 font-light whitespace-nowrap ${
            selected
              ? "bg-dark-2 text-white border-white"
              : "text-tertiary border-tertiary hover:text-white hover:bg-dark-2"
          }`
        }
      >
        I {tab}
      </Tab>
    </>
  );
};
export default PersonalTabList;
