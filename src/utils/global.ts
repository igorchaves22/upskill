export const toTruthyBoolean = (value: unknown) => {
    return !!value;
};

export const isEqual = <T>(a: T, b: T) => {
    return Object.is(a, b);
};

export const duplicateArray = <T>(array: T[]) => {
    return [...array, ...array];
};

export const FALSE_VALUE = false;

export const TRUE_VALUE = true;
