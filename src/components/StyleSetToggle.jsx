import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function StyleSetToggle({ styleSets, selected, onChange }) {
	const handleChange = e => onChange(e.target.value);
	return (
		<div className="container styleset-toggle">
			<ToggleButtonGroup
				size="small"
				value={selected}
				onChange={handleChange}
			>
				{styleSets.map((val, i) => (
					<ToggleButton key={i} value={val}>
						{val}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</div>
	);
}

export default StyleSetToggle;
