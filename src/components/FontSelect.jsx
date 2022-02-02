import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function FontSelect({ selected, fonts, onChange }) {
	return (
		<ToggleButtonGroup
			size="small"
			className="container font-select"
			value={selected}
			onChange={e => onChange(e.target.value)}
			sx={{ fontSize: '5px' }}
			exclusive
		>
			{fonts.map(({ name }) => {
				return (
					<ToggleButton
						sx={{ letterSpacing: '-0.1ch', height: '100%' }}
						key={name}
						value={name}
					>
						{name}
					</ToggleButton>
				);
			})}
		</ToggleButtonGroup>
	);
}

export default FontSelect;
