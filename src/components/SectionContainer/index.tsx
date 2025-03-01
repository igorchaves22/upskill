import { useIntersectionObserver } from "~hooks";
import { HtmlPropsType, ThemeBreakpointKeyType } from "~types";
import { applyClassName, applyClassNameIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = Pick<HtmlPropsType, "id" | "children">;

interface ISectionContainerProps extends AdditionalPropsType {
    minHeightScreen?: boolean;
    largePaddingTop?: boolean;
    layout?: {
        breakpoint: ThemeBreakpointKeyType;
        type: "side" | "largeSide" | "largeSideOpposite";
        flip?: boolean;
    };
    bgColor?: boolean;
}

export const SectionContainer = ({
    minHeightScreen,
    largePaddingTop,
    bgColor,
    layout,
    children,
    ...rest
}: ISectionContainerProps) => {
    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

    return (
        <section
            ref={ref}
            className={
                "section-container" +
                applyClassNameIfDefined(minHeightScreen, "section-container--min-height-screen") +
                applyClassNameIfDefined(largePaddingTop, "section-container--large-padding-top") +
                applyClassNameIfDefined(bgColor, "section-container--bg-color")
            }
            {...rest}
        >
            <section
                className={
                    "section-container__box" +
                    applyClassNameIfDefined(
                        layout,
                        `section-container__box--layout-${layout?.breakpoint}-${layout?.type}`
                    ) +
                    applyClassNameIfDefined(layout?.flip, `section-container__box--layout-${layout?.breakpoint}-flip`) +
                    applyClassName(`section-container__box--${isVisible ? "visible" : "hidden"}`)
                }
            >
                {children}
            </section>
        </section>
    );
};
