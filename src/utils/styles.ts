import { toTruthyBoolean } from "./global";

export const applyClassName = (className: string, noSpace?: "noSpace") => {
    return `${toTruthyBoolean(noSpace) ? "" : " "}${className}`;
};

export const applyClassNameIfTrue = (condition: boolean, className: string, noSpace?: "noSpace") => {
    return condition ? applyClassName(className, noSpace) : "";
};

export const applyClassNameIfDefined = (value: unknown, className: string, noSpace?: "noSpace") => {
    return applyClassNameIfTrue(toTruthyBoolean(value), className, noSpace);
};
