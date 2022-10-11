import { Slider as MuiSlider, InputLabel } from '@mui/material';
import { useCallback } from 'react';

interface SliderProps {
    value: number;
    id: string;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}

function Slider({ value, id, min, max, step, onChange }: SliderProps) {
    const handleChange = useCallback(
        (ev: Event, value: number | number[]) =>
            onChange(Array.isArray(value) ? value[0] : value),
        [onChange]
    );
    return (
        <div className="container slider-container">
            <InputLabel htmlFor={id} sx={{ color: 'primary.main' }}>
                {value}
            </InputLabel>
            <MuiSlider
                size="small"
                sx={{ maxWidth: '100%' }}
                id={id}
                value={value}
                step={step}
                min={min}
                max={max}
                onChange={handleChange}
                valueLabelDisplay="off"
            />
        </div>
    );
}

export default Slider;
