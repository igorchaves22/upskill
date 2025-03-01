import { FALSE_VALUE, TRUE_VALUE } from "~utils";
import { useToggleState } from "./useToggleState";

const TIMEOUT_DELAY_DEFAULT = 1000;

export const useRenderElementWithDelay = (delay?: number) => {
    const { state: isDelayedRendered, updateState: updateIsDelayedRendered } = useToggleState(FALSE_VALUE, TRUE_VALUE);
    const { state: isRendered, updateState: updateIsRendered } = useToggleState(FALSE_VALUE, TRUE_VALUE, () => {
        if (isDelayedRendered) {
            const timeout = setTimeout(() => {
                updateIsDelayedRendered();
            }, delay || TIMEOUT_DELAY_DEFAULT);

            return () => {
                clearTimeout(timeout);
            };
        }

        updateIsDelayedRendered();
    });

    return { isRendered, isDelayedRendered, updateIsRendered };
};
