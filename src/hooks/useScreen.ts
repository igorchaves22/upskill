import { useCallback, useEffect, useState } from "react";

const SCROLL_Y_INITIAL_STATE = 0;
const WINDOW_TOP_INITIAL_VALUE = 0;
const width_SIZE_INITIAL_STATE = window.innerWidth;

export const useScreen = () => {
    const [widthSize, setWidthSize] = useState(width_SIZE_INITIAL_STATE);
    const [scrollY, setScrollY] = useState(SCROLL_Y_INITIAL_STATE);

    const updateWidthSize = useCallback(() => {
        setWidthSize(window.innerWidth);
    }, []);
    const updateScrollY = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: WINDOW_TOP_INITIAL_VALUE, behavior: "smooth" });
    }, []);
    const widthThresholdTrigger = useCallback(
        (widthThreshold: number) => {
            return widthSize >= widthThreshold;
        },
        [widthSize]
    );
    const scrollThresholdTrigger = useCallback(
        (widthThreshold: number) => {
            return scrollY >= widthThreshold;
        },
        [scrollY]
    );

    useEffect(() => {
        updateWidthSize();
        updateScrollY();

        window.addEventListener("resize", updateWidthSize);
        window.addEventListener("scroll", updateScrollY);

        return () => {
            window.removeEventListener("resize", updateWidthSize);
            window.removeEventListener("scroll", updateScrollY);
        };
    }, [updateScrollY, updateWidthSize]);

    return { widthSize, scrollY, scrollToTop, widthThresholdTrigger, scrollThresholdTrigger };
};
