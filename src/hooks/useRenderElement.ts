import { useToggleState } from "./useToggleState";

const FALSE_VALUE = false;
const TRUE_VALUE = true;

export const useRenderElement = (timeoutDelay?: number) => {
    const { state: isTimeoutActive, updateState: updateIsTimeoutActive } = useToggleState(FALSE_VALUE, TRUE_VALUE);
    const { state: isRendered, updateState: updateIsRendered } = useToggleState(
        FALSE_VALUE,
        TRUE_VALUE,
        timeoutDelay ?
            () => {
                if (isTimeoutActive === TRUE_VALUE) {
                    const timeout = setTimeout(() => {
                        updateIsTimeoutActive();
                    }, timeoutDelay);

                    return () => {
                        clearTimeout(timeout);
                    };
                }

                updateIsTimeoutActive();
            }
        :   undefined
    );

    return { isRendered, updateIsRendered, isTimeoutActive };
};
