export const toTruthyBoolean = (value: unknown) => {
    return !!value;
};

export const duplicateArray = <T>(array: T[]) => {
    return [...array, ...array];
};
