import { FC } from "react";
import { Tab } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";
import Section from "../Section";
import PersonalTabList from "./PersonalTabList";
import PersonalTabPanel from "./PersonalTabPanel";
import { PERSONAL_ACHIEVEMENTS } from "./Personal.constants";

const Personal: FC = () => {
  return (
    <Section
      className="pt-16 h-full flex flex-col gap-8 min-h-[50vh]"
      id="personal"
    >
      <Fade triggerOnce>
        <h1 className="text-tertiary text-3xl mt-4">Personal Achievements</h1>
      </Fade>
      <Fade triggerOnce>
        <div>
          <Tab.Group>
            <div className="flex flex-col gap-4 w-full">
              <Tab.List className="flex gap-4 overflow-x-auto w-full">
                {Object.keys(PERSONAL_ACHIEVEMENTS).map((tab, idx) => (
                  <PersonalTabList tab={tab} key={idx} />
                ))}
              </Tab.List>
              <Tab.Panels className="">
                {Object.values(PERSONAL_ACHIEVEMENTS).map(
                  (achievements, idx) => (
                    <PersonalTabPanel key={idx} achievements={achievements} />
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
