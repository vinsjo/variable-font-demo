import { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import Slider from './components/Slider';
import DemoText from './components/DemoText';
import ColorSelect from './components/ColorSelect';
import CaseToggle from './components/CaseToggle';
import FontSelect from './components/FontSelect';
import { minmax, constrain } from './utils';
import { initFont } from './utils/fonts';
import useWindowSize from './hooks/useWindowSize';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});
const fonts = [
    initFont('Archivo', minmax(62, 125)),
    initFont('Encode Sans', minmax(75, 125)),
    initFont('Georama', minmax(62.5, 150)),
];

const colors = {
    purple: '#AB9DF2',
    pink: '#FF6188',
    green: '#A9DC76',
};

function App() {
    const windowSize = useWindowSize();
    const [font, setFont] = useState(fonts[0]);
    const [text, setText] = useState(font.name as string);

    const [stretch, setStretch] = useState(font.stretch.medium);
    const [weight, setWeight] = useState(font.weight.medium);
    const [size, setSize] = useState(64);

    const [bgColor, setBgColor] = useState(colors.purple);
    const [upperCase, setUpperCase] = useState(false);

    const handleStretch = useCallback((value: number) => setStretch(value), []);
    const handleWeight = useCallback((value: number) => setWeight(value), []);
    const handleSize = useCallback((value: number) => setSize(value), []);
    const handleText = useCallback((value: string) => setText(value), []);
    const handleColor = useCallback((value: string) => setBgColor(value), []);
    const toggleUpperCase = useCallback(
        () => setUpperCase((prev) => !prev),
        []
    );

    const switchFont = useCallback(
        (name: string) => {
            if (name === font.name) return;
            const newFont = fonts.find((font) => font.name === name);
            if (!newFont) return;
            setFont(newFont);
        },
        [font]
    );

    useLayoutEffect(() => {
        const { name, stretch, size, weight } = font;
        setText(name);
        setStretch(stretch.medium);
        setWeight(weight.medium);
        setSize((prev) => constrain(prev, size.min, size.max));
    }, [font]);

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

    return (
        <ThemeProvider theme={theme}>
            <div
                className="app"
                style={{
                    maxWidth: windowSize.width,
                    maxHeight: windowSize.height,
                }}
            >
                <ColorSelect
                    selected={bgColor}
                    colors={colors}
                    onChange={handleColor}
                />

                <CaseToggle selected={upperCase} onChange={toggleUpperCase} />
                <DemoText
                    value={text}
                    style={{
                        fontFamily: font.family,
                        textTransform: upperCase ? 'uppercase' : 'none',
                        fontSize: `${size}px`,
                        fontStretch: `${stretch}%`,
                        fontWeight: `${weight}`,
                    }}
                    onChange={handleText}
                />
                <div className="container adjustments">
                    <Slider
                        id="stretch"
                        value={stretch}
                        min={font.stretch.min}
                        max={font.stretch.max}
                        step={0.1}
                        onChange={handleStretch}
                    />
                    <Slider
                        id="weight"
                        value={weight}
                        min={font.weight.min}
                        max={font.weight.max}
                        step={10}
                        onChange={handleWeight}
                    />
                    <Slider
                        id="size"
                        value={size}
                        min={font.size.min}
                        max={font.size.max}
                        step={1}
                        onChange={handleSize}
                    />
                    <FontSelect
                        selected={font.name}
                        fonts={fonts}
                        onChange={switchFont}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
