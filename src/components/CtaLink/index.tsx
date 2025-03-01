import { AnchorPropsType } from "~types";
import { applyClassNameIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = Omit<AnchorPropsType, "href" | "className">;

interface ICtaLinkProps extends AdditionalPropsType {
    text: string;
    alternative?: boolean;
}

export const CtaLink = ({ text, alternative, ...rest }: ICtaLinkProps) => {
    return (
        <a
            href="/"
            className={"cta-link" + applyClassNameIfDefined(alternative, "cta-link--alternative")}
            {...rest}
        >
            {text}
        </a>
    );
};
