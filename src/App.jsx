import { useState, useCallback, useEffect } from 'react';
import './css/App.css';
// import { theme } from './components/theme';
import { ThemeProvider, Box, createTheme } from '@mui/material';
import DemoSlider from './components/DemoSlider';
import FontDemo from './components/FontDemo';
import ColorButtons from './components/ColorButtons';
import UpperCaseToggle from './components/UppercaseToggle';

// defaults: green 00b622, purple 8636ff, orange ff5b00 / ff7300
const THEME = createTheme({
	palette: {
		primary: {
			main: '#000',
		},
	},
});

function App() {
	const colors = {
		purple: '#AB9DF2',
		pink: '#FF6188',
		green: '#A9DC76',
	};

	const [text, setText] = useState('Archivo');
	const [stretch, setStretch] = useState(62);
	const [weight, setWeight] = useState(400);

	const [size, setSize] = useState(64);
	const [color, setColor] = useState(colors.purple);
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
					colors={colors}
					onChange={onColorChange}
				/>
				<FontDemo
					value={text}
					style={{
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
						min={62}
						max={125}
						step={1}
						onChange={onFontChange.stretch}
					/>
					<DemoSlider
						id="weight"
						value={weight}
						min={100}
						max={900}
						step={10}
						onChange={onFontChange.weight}
					/>
					<DemoSlider
						id="size"
						value={size}
						min={16}
						max={128}
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
