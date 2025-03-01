import { useEffect } from "react";
import { useRenderElementWithDelay } from "./useRenderElementWithDelay";
import { useScreen } from "./useScreen";

const SCREEN_BREAKPOINT = 992;
const SCROLL_THRESHOLD = 10;
const FALSE_VALUE = false;
const TIMEOUT_DELAY = 250;

export const useHeader = () => {
    const { widthThresholdTrigger, scrollThresholdTrigger } = useScreen();
    const {
        isRendered: menuIsRendered,
        isDelayedRendered: menuIsDelayedRendered,
        updateIsRendered: updateMenuIsRendered
    } = useRenderElementWithDelay(TIMEOUT_DELAY);

    const isWidthAboveThreshold = widthThresholdTrigger(SCREEN_BREAKPOINT);
    const isScrolledBelowThreshold = scrollThresholdTrigger(SCROLL_THRESHOLD);

    useEffect(() => {
        if (isWidthAboveThreshold && menuIsRendered) {
            updateMenuIsRendered(FALSE_VALUE);
        }
    }, [isWidthAboveThreshold, menuIsRendered, updateMenuIsRendered]);

    return {
        isWidthAboveThreshold,
        isScrolledBelowThreshold,
        menuIsRendered,
        menuIsDelayedRendered,
        updateMenuIsRendered
    };
};
