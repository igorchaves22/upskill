import { useEffect, useRef } from "react";
import { FALSE_VALUE, TRUE_VALUE } from "~utils";
import { useToggleState } from "./useToggleState";

const THRESHOLD = 0.1;

export const useIntersectionObserver = <T extends HTMLElement>() => {
    const { state: isVisible, updateState: updateIsVisible } = useToggleState(FALSE_VALUE, TRUE_VALUE);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    updateIsVisible(TRUE_VALUE);
                }
            },
            { threshold: THRESHOLD }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [updateIsVisible]);

    return { ref, isVisible };
};
