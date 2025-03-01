import { HtmlPropsType, ThemeBreakpointKeyType } from "~types";
import { applyClassNameIfDefined, renderElementIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = Pick<HtmlPropsType, "children">;

interface ISectionInfoProps extends AdditionalPropsType {
    size?: "sm" | "md" | "lg";
    title: string;
    subtitle?: string;
    description?: string;
    leftAlign?: boolean;
    leftAlignOnLargeScreen?: ThemeBreakpointKeyType;
}

export const SectionInfo = ({
    size,
    title,
    subtitle,
    description,
    leftAlign,
    leftAlignOnLargeScreen,
    children
}: ISectionInfoProps) => {
    return (
        <section className={"section-info" + applyClassNameIfDefined(size, `section-info--size-${size}`)}>
            <section
                className={
                    "section-info__box section-info__box--no-row-gap" +
                    applyClassNameIfDefined(leftAlign, "section-info__box--start") +
                    applyClassNameIfDefined(
                        leftAlignOnLargeScreen,
                        `section-info__box--${leftAlignOnLargeScreen}-start`
                    )
                }
            >
                <h1
                    className={
                        "section-info__text section-info__text--title" +
                        applyClassNameIfDefined(leftAlign, "section-info__text--start") +
                        applyClassNameIfDefined(
                            leftAlignOnLargeScreen,
                            `section-info__text--${leftAlignOnLargeScreen}-start`
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
                            applyClassNameIfDefined(leftAlign, "section-info__text--left") +
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
                            applyClassNameIfDefined(leftAlign, "section-info__text--justify") +
                            applyClassNameIfDefined(
                                leftAlignOnLargeScreen,
                                `section-info__text--${leftAlignOnLargeScreen}-justify`
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
                        applyClassNameIfDefined(leftAlign, "section-info__box--start") +
                        applyClassNameIfDefined(
                            leftAlignOnLargeScreen,
                            `section-info__box--${leftAlignOnLargeScreen}-start`
                        )
                    }
                >
                    {children}
                </section>
            )}
        </section>
    );
};
