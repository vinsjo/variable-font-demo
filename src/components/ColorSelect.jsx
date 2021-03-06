function ColorSelect({ selected, colors, onChange }) {
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
