import { PropsWithChildren } from "react";
import { ThemeBreakpointKeyType } from "~types";
import { applyClassNameIfDefined, renderElementIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = PropsWithChildren;

interface ISectionInfoProps extends AdditionalPropsType {
    size?: "sm" | "md" | "lg";
    subtitle: string;
    title?: string;
    description?: string;
    leftAlign?: boolean;
    leftAlignOnLargeScreen?: ThemeBreakpointKeyType;
}

export const SectionInfo = ({
    size,
    subtitle,
    title,
    description,
    leftAlign,
    leftAlignOnLargeScreen,
    children
}: ISectionInfoProps) => {
    return (
        <section className={"section-info" + applyClassNameIfDefined(size, `section-info--size-${size}`)}>
            <section className="section-info__box section-info__box--no-row-gap">
                <h1
                    className={
                        "section-info__text section-info__text--title" +
                        applyClassNameIfDefined(leftAlign, `section-info__text--left`) +
                        applyClassNameIfDefined(
                            leftAlignOnLargeScreen,
                            `section-info__text--${leftAlignOnLargeScreen}-left`
                        )
                    }
                >
                    {title}
                </h1>
                {renderElementIfDefined(
                    subtitle,
                    <h2
                        className={
                            "section-info__text section-info__text--subtitle" +
                            applyClassNameIfDefined(leftAlign, `section-info__text--left`) +
                            applyClassNameIfDefined(
                                leftAlignOnLargeScreen,
                                `section-info__text--${leftAlignOnLargeScreen}-left`
                            )
                        }
                    >
                        {subtitle}
                    </h2>
                )}

                {renderElementIfDefined(
                    description,
                    <p
                        className={
                            "section-info__text" +
                            applyClassNameIfDefined(leftAlign, `section-info__text--description-left`) +
                            applyClassNameIfDefined(
                                leftAlignOnLargeScreen,
                                `section-info__text--${leftAlignOnLargeScreen}-description-left`
                            )
                        }
                    >
                        {description}
                    </p>
                )}
            </section>
            {renderElementIfDefined(
                children,
                <section
                    className={
                        "section-info__box" +
                        applyClassNameIfDefined(leftAlign, `section-info__box--left`) +
                        applyClassNameIfDefined(
                            leftAlignOnLargeScreen,
                            `section-info__box--${leftAlignOnLargeScreen}-left`
                        )
                    }
                >
                    {children}
                </section>
            )}
        </section>
    );
};
