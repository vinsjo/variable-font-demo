/**
 * @param {Number} min
 * @param {Number} max
 */
const getRange = (min, max) => {
	return {
		min: min,
		max: max,
		get medium() {
			return (
				Math.round((this.min + (this.max - this.min) * 0.5) * 10) / 10
			);
		},
		constrain(val) {
			if (typeof val !== 'number' || Number.isNaN(val)) {
				return this.medium;
			}
			return Math.max(Math.min(this.max, val), this.min);
		},
	};
};

/**
 * @param {String} name
 * @param {Number} strMin
 * @param {Number} strMax
 * @param {Number} wghtMin
 * @param {Number} wghtMax
 * @param {Number} sizeMin
 * @param {Number} sizeMax
 * @param {String} fallBackName
 * @returns
 */
function fontProps(
	name,
	strMin = 75,
	strMax = 125,
	wghtMin = 100,
	wghtMax = 900,
	sizeMin = 0,
	sizeMax = 256,
	fallBackName = 'sans-serif'
) {
	const font = {
		name: name,
		fallBack: fallBackName,
		get fontFamily() {
			return `${this.name}, ${this.fallBack}`;
		},
		stretch: getRange(strMin, strMax),
		weight: getRange(wghtMin, wghtMax),
		size: getRange(sizeMin, sizeMax),
	};
	return font;
}

export default fontProps;
