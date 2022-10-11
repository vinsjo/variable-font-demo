import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useCallback } from 'react';
import { type Font } from 'src/utils/fonts';
interface FontSelectProps {
    selected: Font['name'];
    fonts: Font[];
    onChange: (name: Font['name']) => void;
}

function FontSelect({ selected, fonts, onChange }: FontSelectProps) {
    const handleChange = useCallback(
        (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
            const target = ev.target as HTMLButtonElement;
            onChange(target.value);
        },
        [onChange]
    );
    return (
        <ToggleButtonGroup
            size="small"
            className="container font-select"
            value={selected}
            onChange={handleChange}
            sx={{ fontSize: '5px' }}
            exclusive
        >
            {fonts.map(({ name }) => {
                return (
                    <ToggleButton
                        sx={{ letterSpacing: '-0.1ch', height: '100%' }}
                        key={name}
                        value={name}
                    >
                        {name}
                    </ToggleButton>
                );
            })}
        </ToggleButtonGroup>
    );
}

export default FontSelect;
