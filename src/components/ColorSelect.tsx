interface ColorSelectProps {
    colors: Record<string, string>;
    selected?: string;
    onChange: (color: string) => void;
}
function ColorSelect({ colors, selected, onChange }: ColorSelectProps) {
    return (
        <div className="container color-buttons">
            {Object.entries(colors).map(([key, color]) => {
                const style =
                    selected === color ? {} : { backgroundColor: color };
                return (
                    <button
                        key={key}
                        className="color-btn"
                        type="button"
                        value={color}
                        style={style}
                        onClick={() => onChange(color)}
                        disabled={selected === color}
                    ></button>
                );
            })}
        </div>
    );
}

export default ColorSelect;
