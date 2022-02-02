import { useState, useCallback, useEffect } from 'react';
import './css/App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import DemoSlider from './components/DemoSlider';
import FontDemo from './components/FontDemo';
import ColorSelect from './components/ColorSelect';
import CaseToggle from './components/CaseToggle';
import FontSelect from './components/FontSelect';
import fontProps from './functions/fontProps';

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
	fontProps('Georama', 62.5, 150),
];
const COLORS = {
	purple: '#AB9DF2',
	pink: '#FF6188',
	green: '#A9DC76',
};

function App() {
	const [font, setFont] = useState(FONTS[0]);
	const [text, setText] = useState('');
	const [stretch, setStretch] = useState();
	const [weight, setWeight] = useState();
	const [size, setSize] = useState(64);

	const [color, setColor] = useState(COLORS.purple);
	const [upperCase, setUpperCase] = useState(false);

	const callbacks = {
		stretch: useCallback(value => setStretch(value), [stretch, setStretch]),
		weight: useCallback(value => setWeight(value), [weight, setWeight]),
		size: useCallback(value => setSize(value), [size, setSize]),
		color: useCallback(value => setColor(value), [color, setColor]),
		text: useCallback(value => setText(value), [text, setText]),
		font: useCallback(
			name => setFont(FONTS.find(font => font.name === name) || FONTS[0]),
			[font, setFont]
		),
		upperCase: useCallback(
			() => setUpperCase(!upperCase),
			[upperCase, setUpperCase]
		),
	};

	useEffect(() => {
		// If text is not a font-name:
		if (!text.length || !FONTS.find(({ name }) => name === text)) {
			setText(font.name);
		}
		setText(font.name);
		setStretch(font.stretch.medium);
		setWeight(font.weight.medium);
		setSize(font.size.medium * 0.5);
	}, [font, setFont, callbacks.font]);

	useEffect(
		() => (document.body.style.backgroundColor = color),
		[color, setColor]
	);

	return (
		<ThemeProvider theme={THEME}>
			<div className="App">
				<ColorSelect
					selected={color}
					colors={COLORS}
					onChange={callbacks.color}
				/>

				<CaseToggle
					selected={upperCase}
					onChange={callbacks.upperCase}
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
					onInput={callbacks.text}
				/>
				<div className="container adjustments">
					<DemoSlider
						id="stretch"
						value={stretch || font.stretch.medium}
						min={font.stretch.min}
						max={font.stretch.max}
						step={0.1}
						onChange={callbacks.stretch}
					/>
					<DemoSlider
						id="weight"
						value={weight || font.weight.medium}
						min={font.weight.min}
						max={font.weight.max}
						step={10}
						onChange={callbacks.weight}
					/>
					<DemoSlider
						id="size"
						value={size}
						min={font.size.min}
						max={font.size.max}
						step={1}
						onChange={callbacks.size}
					/>
					<FontSelect
						selected={font.name}
						fonts={FONTS}
						onChange={callbacks.font}
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
