import { minmax, roundFloat, type MinMax } from '.';

export const getRange = ({ min, max }: MinMax) => {
    const medium = roundFloat(min + (max - min) * 0.5);
    return {
        min,
        max,
        medium,
    };
};

const fontDefaults = {
    stretch: minmax(75, 125),
    weight: minmax(100, 900),
    size: minmax(6, 256),
    fallbackName: 'sans-serif',
};

export const initFont = <N extends string>(
    name: N,
    str?: MinMax,
    wght?: MinMax,
    sz?: MinMax,
    fallbackName?: string
) => {
    const fallback = fallbackName || fontDefaults.fallbackName;
    const family = `${name}, ${fallback}`;
    const stretch = getRange(str || { ...fontDefaults.stretch });
    const weight = getRange(wght || { ...fontDefaults.weight });
    const size = getRange(sz || { ...fontDefaults.size });
    return { name, fallback, family, stretch, weight, size };
};

export type Font = ReturnType<typeof initFont>;
