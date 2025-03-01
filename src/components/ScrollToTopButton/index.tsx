import { CaretUp } from "@phosphor-icons/react";
import { useScrollToTopButton } from "~hooks";
import { applyClassName, renderElementIfTrue } from "~utils";
import "./styles.scss";

export const ScrollToTopButton = () => {
    const { isRendered, isTimeoutActive, scrollToTop } = useScrollToTopButton();

    return renderElementIfTrue(
        isTimeoutActive,
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={
                "scroll-to-top-button" +
                applyClassName(`scroll-to-top-button--${isRendered ? "is-visible" : "is-not-visible"}`)
            }
        >
            <CaretUp className="scroll-to-top-button__icon" />
        </button>
    );
};
