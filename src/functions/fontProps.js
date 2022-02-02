function fontProps(
	name,
	strMin = 75,
	strMax = 125,
	wghtMin = 100,
	wghtMax = 900,
	sizeMin = 0,
	sizeMax = 256,
	fallBack = 'sans-serif'
) {
	const medium = ({ min, max }) => Math.round(min + (max - min) * 0.5);
	const font = {
		name: name,
		fallBack: fallBack,
		get fontFamily() {
			return `${this.name}, ${this.fallBack}`;
		},
		stretch: {
			min: strMin,
			max: strMax,
			get medium() {
				return medium(this);
			},
		},
		weight: {
			min: wghtMin,
			max: wghtMax,
			get medium() {
				return medium(this);
			},
		},
		size: {
			min: sizeMin,
			max: sizeMax,
			get medium() {
				return medium(this);
			},
		},
	};
	return font;
}

export { fontProps };
