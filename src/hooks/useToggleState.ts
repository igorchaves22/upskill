import { useCallback, useState } from "react";

export const useToggleState = <T>(initialState: T, alternativeState: T, callback?: () => void) => {
    const [state, setState] = useState<T>(initialState);

    const updateState = useCallback(
        (applyState?: T) => {
            const newState = applyState ?? (state === initialState ? alternativeState : initialState);

            if (callback) {
                callback();
            }

            setState(newState);
        },
        [alternativeState, callback, initialState, state]
    );

    return { state, updateState };
};
