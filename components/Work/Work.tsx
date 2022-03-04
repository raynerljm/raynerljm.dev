import { FC } from "react";
import Section from "../Section";
import { Tab } from "@headlessui/react";
import WorkTabList from "./WorkTabList";
import WorkTabPanel from "./WorkTabPanel";
import { Fade } from "react-awesome-reveal";
import { WORK_EXPERIENCES } from "./Work.constants";

const Work: FC = () => {
  return (
    <>
      <Section
        id="work"
        className="pt-16 h-full flex flex-col gap-8 min-h-[50vh]"
      >
        <Fade triggerOnce>
          <h1 className="text-tertiary text-3xl mt-4">Work Experiences</h1>
        </Fade>
        <Fade triggerOnce>
          <div>
            <Tab.Group>
              <div className="flex gap-4 flex-col sm:flex-row w-full">
                <Tab.List className="flex sm:w-max gap-4 sm:gap-0 sm:flex-col overflow-x-scroll sm:overflow-x-visible w-full">
                  {WORK_EXPERIENCES.map((work) => (
                    <WorkTabList key={work.company} work={work} />
                  ))}
                </Tab.List>
                <Tab.Panels className="w-fit">
                  {WORK_EXPERIENCES.map((work) => (
                    <WorkTabPanel key={work.company} work={work} />
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
