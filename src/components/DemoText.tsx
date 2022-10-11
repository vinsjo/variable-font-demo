import { useCallback } from 'react';

interface DemoTextProps {
    value: string;
    style: Record<string, string | number>;
    onChange: (value: string) => unknown;
}
function DemoText({ value, style, onChange }: DemoTextProps) {
    const handleChange = useCallback(
        ({ target }: React.ChangeEvent<HTMLInputElement>) => {
            onChange(target.value);
        },
        [onChange]
    );
    return (
        <div className="container demo">
            <input
                type="text"
                value={value}
                style={style}
                spellCheck="false"
                maxLength={30}
                onChange={handleChange}
            />
        </div>
    );
}

export default DemoText;
