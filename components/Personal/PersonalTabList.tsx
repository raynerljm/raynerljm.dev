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
                    `whitespace-nowrap border-b-2 py-2 px-3 text-center text-base font-light transition-all sm:text-lg ${
                        selected
                            ? "border-white bg-dark-2 text-white"
                            : "border-tertiary text-tertiary hover:bg-dark-2 hover:text-white"
                    }`
                }
            >
                I {tab}
            </Tab>
        </>
    );
};
export default PersonalTabList;
