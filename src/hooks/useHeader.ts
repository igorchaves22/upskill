import { useEffect } from "react";
import { useRenderElement } from "./useRenderElement";
import { useScreen } from "./useScreen";

const SCREEN_BREAKPOINT = 768;
const SCROLL_THRESHOLD = 10;
const FALSE_VALUE = false;
const TIMEOUT_DELAY = 250;

export const useHeader = () => {
    const { widthThresholdTrigger, scrollThresholdTrigger } = useScreen();
    const {
        isRendered: menuIsRendered,
        updateIsRendered: updateMenuIsRendered,
        isTimeoutActive: menuIsTimeoutActive
    } = useRenderElement(TIMEOUT_DELAY);

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
        updateMenuIsRendered,
        menuIsTimeoutActive
    };
};
