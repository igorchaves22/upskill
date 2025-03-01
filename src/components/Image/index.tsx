import { ImagePropsType } from "~types";
import { applyClassNameIfDefined } from "~utils";
import "./styles.scss";

type AdditionalPropsType = Omit<ImagePropsType, "loading" | "className">;

interface IImageProps extends AdditionalPropsType {
    size?: "xs" | "sm" | "md" | "lg";
    radius?: boolean;
}

export const Image = ({ size, radius, ...rest }: IImageProps) => {
    return (
        <img
            src=""
            alt="Its a image"
            loading="lazy"
            className={
                "image" +
                applyClassNameIfDefined(size, `image--size-${size}`) +
                applyClassNameIfDefined(radius, "image--radius")
            }
            {...rest}
        />
    );
};
