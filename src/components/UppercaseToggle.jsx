import { ToggleButton } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';

function UpperCaseToggle({ selected, onChange }) {
	const handleChange = e => onChange(e.target.value);
	return (
		<div className="container uppercase-toggle">
			<ToggleButton
				size="small"
				value={'uc-toggle'}
				selected={selected}
				onChange={handleChange}
			>
				<TextFieldsIcon />
			</ToggleButton>
		</div>
	);
}

export default UpperCaseToggle;
