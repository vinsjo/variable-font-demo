import { isNum } from 'x-is-type/callbacks';

export const roundFloat = (num: number, precision = 1) => {
    if (!num || !isNum(num)) return 0;
    const m = 10 ** precision;
    return Math.round(num * m) / m;
};

export const constrain = (value: number, min: number, max: number) => {
    return Math.max(Math.min(max, value), min);
};

export const minmax = (min: number, max: number) => {
    return { min, max };
};

export type MinMax = ReturnType<typeof minmax>;
