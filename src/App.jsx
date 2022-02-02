import { useState, useCallback, useEffect } from 'react';
import './css/App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import DemoSlider from './components/DemoSlider';
import FontDemo from './components/FontDemo';
import ColorButtons from './components/ColorButtons';
import UpperCaseToggle from './components/UppercaseToggle';
import { fontProps } from './functions/fontProps';

const THEME = createTheme({
	palette: {
		primary: {
			main: '#000',
		},
	},
});
const FONTS = [
	fontProps('Archivo', 62, 125),
	fontProps('Encode Sans', 75, 125),
];
const COLORS = {
	purple: '#AB9DF2',
	pink: '#FF6188',
	green: '#A9DC76',
};

function App() {
	const font = FONTS[0];

	const [text, setText] = useState(font.name);
	const [stretch, setStretch] = useState(font.stretch.medium);
	const [weight, setWeight] = useState(font.weight.medium);
	const [size, setSize] = useState(font.size.medium);

	const [color, setColor] = useState(COLORS.purple);
	const [upperCase, setUpperCase] = useState(false);

	const onFontChange = {
		stretch: useCallback(value => setStretch(value), [stretch, setStretch]),
		weight: useCallback(value => setWeight(value), [weight, setWeight]),
		size: useCallback(value => setSize(value), [size, setSize]),
	};

	const onColorChange = useCallback(
		value => setColor(value),
		[color, setColor]
	);

	const onTextInput = useCallback(value => setText(value), [text, setText]);

	const onUpperCaseChange = useCallback(() => {
		setUpperCase(!upperCase);
	}, [upperCase, setUpperCase]);

	useEffect(
		() => (document.body.style.backgroundColor = color),
		[color, setColor]
	);

	return (
		<ThemeProvider theme={THEME}>
			<div className="App">
				<ColorButtons
					selected={color}
					colors={COLORS}
					onChange={onColorChange}
				/>
				<FontDemo
					value={text}
					style={{
						fontFamily: `${font.name}, sans-serif`,
						textTransform: upperCase ? 'uppercase' : 'none',
						fontSize: `${size}px`,
						fontStretch: `${stretch}%`,
						fontWeight: `${weight}`,
					}}
					onInput={onTextInput}
				/>

				<div className="container adjustments">
					<DemoSlider
						id="stretch"
						value={stretch}
						min={font.stretch.min}
						max={font.stretch.max}
						step={0.1}
						onChange={onFontChange.stretch}
					/>
					<DemoSlider
						id="weight"
						value={weight}
						min={font.weight.min}
						max={font.weight.max}
						step={10}
						onChange={onFontChange.weight}
					/>
					<DemoSlider
						id="size"
						value={size}
						min={font.size.min}
						max={font.size.max}
						step={1}
						onChange={onFontChange.size}
					/>
					<UpperCaseToggle
						onChange={onUpperCaseChange}
						selected={upperCase}
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
