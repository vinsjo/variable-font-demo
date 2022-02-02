function ColorButtons({ selected, colors, onChange }) {
	const handleClick = e => onChange(e.target.value);
	return (
		<div className="container color-buttons">
			{Object.entries(colors).map(([key, val]) => {
				const style = selected === val ? {} : { backgroundColor: val };
				return (
					<button
						key={key}
						className="color-btn"
						type="button"
						value={val}
						style={style}
						onClick={handleClick}
						disabled={selected === val}
					></button>
				);
			})}
		</div>
	);
}

export default ColorButtons;
