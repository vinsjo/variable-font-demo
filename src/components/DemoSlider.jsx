import { Slider, InputLabel } from '@mui/material';

function DemoSlider({ value, id, min, max, step, onChange }) {
	return (
		<div className="container slider-container">
			<InputLabel htmlFor={id} sx={{ color: 'primary.main' }}>
				{value}
			</InputLabel>
			<Slider
				size="small"
				sx={{ maxWidth: '100%' }}
				id={id}
				value={value}
				step={step}
				min={min}
				max={max}
				onChange={e => onChange(e.target.value)}
				valueLabelDisplay="off"
			/>
		</div>
	);
}

export default DemoSlider;
