function FontDemo({ value, style, onInput }) {
	return (
		<div className="container demo">
			<input
				type="text"
				value={value}
				style={style}
				spellCheck="false"
				maxLength={30}
				onInput={e => onInput(e.target.value)}
			/>
		</div>
	);
}

export default FontDemo;
