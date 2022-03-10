import { Dispatch, SetStateAction } from "react";

export const detectScrolledToRight = (
    id: string,
    setIsScrolledToRight: Dispatch<SetStateAction<boolean>>
) => {
    const workScroll = document.querySelector("#" + id);
    if (workScroll) {
        const { scrollLeft, scrollWidth, clientWidth } = workScroll as Element;
        // if (scrollLeft + clientWidth + 80 >= scrollWidth) {
        if (scrollLeft > 20) {
            setIsScrolledToRight(true);
        } else {
            setIsScrolledToRight(false);
        }
    }
};
