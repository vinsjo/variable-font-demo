function FontDemo({ value, style, onInput }) {
	const handleInput = e => onInput && onInput(e.target.value);
	return (
		<div className="container demo">
			<input
				type="text"
				value={value}
				style={style}
				spellCheck="false"
				maxLength={30}
				onInput={handleInput}
			/>
		</div>
	);
}

export default FontDemo;
