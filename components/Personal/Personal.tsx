import { FC, useState } from "react";
import { Tab } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";
import Section from "../Section";
import PersonalTabList from "./PersonalTabList";
import PersonalTabPanel from "./PersonalTabPanel";
import { PERSONAL_ACHIEVEMENTS } from "./Personal.constants";
import ScrollRight from "../ScrollRight";
import { detectScrolledToRight } from "../../lib/helpers";

const Personal: FC = () => {
    const [isScrolledToRight, setIsScrolledToRight] = useState(false);
    return (
        <Section
            className="flex h-full min-h-[50vh] flex-col gap-8 pt-16"
            id="personal"
        >
            <Fade triggerOnce>
                <h1 className="mt-4 text-3xl text-tertiary">
                    Personal Achievements
                </h1>
            </Fade>
            <Fade triggerOnce>
                <div>
                    <Tab.Group>
                        <div className="relative flex w-full flex-col gap-4">
                            <ScrollRight
                                isScrolledToRight={isScrolledToRight}
                            />
                            <Tab.List
                                id="personalScroll"
                                className="flex w-full gap-4 overflow-x-auto"
                                onScroll={() =>
                                    detectScrolledToRight(
                                        "personalScroll",
                                        setIsScrolledToRight
                                    )
                                }
                            >
                                {Object.keys(PERSONAL_ACHIEVEMENTS).map(
                                    (tab, idx) => (
                                        <PersonalTabList tab={tab} key={idx} />
                                    )
                                )}
                            </Tab.List>
                            <Tab.Panels className="">
                                {Object.values(PERSONAL_ACHIEVEMENTS).map(
                                    (achievements, idx) => (
                                        <PersonalTabPanel
                                            key={idx}
                                            achievements={achievements}
                                        />
                                    )
                                )}
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>
            </Fade>
        </Section>
    );
};
export default Personal;
