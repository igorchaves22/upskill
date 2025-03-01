import { useEffect } from "react";
import { useRenderElement } from "./useRenderElement";
import { useScreen } from "./useScreen";

const TIMEOUT_DELAY = 250;
const SCROLL_THRESHOLD = 20;

export const useScrollToTopButton = () => {
    const { scrollToTop, scrollThresholdTrigger } = useScreen();
    const { isRendered, updateIsRendered, isTimeoutActive } = useRenderElement(TIMEOUT_DELAY);

    const isScrolledBelowThreshold = scrollThresholdTrigger(SCROLL_THRESHOLD);

    useEffect(() => {
        if (isScrolledBelowThreshold !== isRendered) {
            updateIsRendered(isScrolledBelowThreshold);
        }
    }, [isRendered, isScrolledBelowThreshold, updateIsRendered]);

    return {
        isRendered,
        isTimeoutActive,
        scrollToTop
    };
};
