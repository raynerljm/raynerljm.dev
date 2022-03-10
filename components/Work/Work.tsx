import { FC, useState } from "react";
import Section from "../Section";
import { Tab } from "@headlessui/react";
import WorkTabList from "./WorkTabList";
import WorkTabPanel from "./WorkTabPanel";
import { Fade } from "react-awesome-reveal";
import { WORK_EXPERIENCES } from "./Work.constants";
import ScrollRight from "../ScrollRight";
import { detectScrolledToRight } from "../../lib/helpers";

const Work: FC = () => {
    const [isScrolledToRight, setIsScrolledToRight] = useState(false);

    return (
        <>
            <Section
                id="work"
                className="flex h-full min-h-[50vh] flex-col gap-8 pt-16"
            >
                <Fade triggerOnce>
                    <h1 className="mt-4 text-3xl text-tertiary">
                        Work Experiences
                    </h1>
                </Fade>
                <Fade triggerOnce>
                    <div>
                        <Tab.Group>
                            <div className="relative flex w-full flex-col gap-4 sm:flex-row">
                                <ScrollRight
                                    isScrolledToRight={isScrolledToRight}
                                />
                                <Tab.List
                                    id="workScroll"
                                    className="flex w-full gap-4 overflow-x-scroll sm:w-max sm:flex-col sm:gap-0 sm:overflow-x-visible"
                                    onScroll={() =>
                                        detectScrolledToRight(
                                            "workScroll",
                                            setIsScrolledToRight
                                        )
                                    }
                                >
                                    {WORK_EXPERIENCES.map((work) => (
                                        <WorkTabList
                                            key={work.company}
                                            work={work}
                                        />
                                    ))}
                                </Tab.List>
                                <Tab.Panels className="w-fit">
                                    {WORK_EXPERIENCES.map((work) => (
                                        <WorkTabPanel
                                            key={work.company}
                                            work={work}
                                        />
                                    ))}
                                </Tab.Panels>
                            </div>
                        </Tab.Group>
                    </div>
                </Fade>
            </Section>
        </>
    );
};
export default Work;
