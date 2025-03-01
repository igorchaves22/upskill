import { CaretDoubleUp } from "@phosphor-icons/react";
import { useScrollToTopButton } from "~hooks";
import { applyClassName, renderElementIfTrue } from "~utils";
import "./styles.scss";

export const ScrollToTopButton = () => {
    const { isRendered, isDelayedRendered, scrollToTop } = useScrollToTopButton();

    return renderElementIfTrue(
        isDelayedRendered,
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={
                "scroll-to-top-button" +
                applyClassName(`scroll-to-top-button--${isRendered ? "rendered" : "not-rendered"}`)
            }
        >
            <CaretDoubleUp className="scroll-to-top-button__icon" />
        </button>
    );
};
