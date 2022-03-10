import { FC } from "react";
import { Transition } from "@headlessui/react";
import { HiChevronDoubleDown } from "react-icons/hi";

type Props = { isScrolledToRight: boolean };

const ScrollRight: FC<Props> = ({ isScrolledToRight }) => {
    return (
        <Transition
            show={!isScrolledToRight}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute right-0 -top-8 flex items-center gap-2 sm:hidden"
        >
            <span className="text-sm font-light text-tertiary">
                Scroll Right
            </span>
            <div className="-rotate-90">
                <HiChevronDoubleDown className="animate-bounce text-3xl text-tertiary" />
            </div>
        </Transition>
    );
};
export default ScrollRight;
