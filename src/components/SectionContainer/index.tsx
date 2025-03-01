import { PropsWithChildren } from "react";
import { HtmlPropsType, ThemeBreakpointKeyType } from "~types";
import { applyClassNameIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = PropsWithChildren & Pick<HtmlPropsType, "id">;

interface ISectionContainerProps extends AdditionalPropsType {
    minHeightScreen?: boolean;
    largePaddingTop?: boolean;
    layoutOnLargeScreen?: {
        breakpoint: ThemeBreakpointKeyType;
        type: "side" | "largeSide" | "largeSideOpposite";
        flip?: boolean;
    };
    bgColor?: boolean;
}

export const SectionContainer = ({
    minHeightScreen,
    largePaddingTop,
    layoutOnLargeScreen,
    bgColor,
    children,
    ...rest
}: ISectionContainerProps) => {
    return (
        <section
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
                        layoutOnLargeScreen,
                        `section-container__box--large-screen-${layoutOnLargeScreen?.breakpoint}-${layoutOnLargeScreen?.type}`
                    ) +
                    applyClassNameIfDefined(
                        layoutOnLargeScreen?.flip,
                        `section-container__box--large-screen-${layoutOnLargeScreen?.breakpoint}-flip`
                    )
                }
            >
                {children}
            </section>
        </section>
    );
};
