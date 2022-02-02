import { ToggleButton } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';

function CaseToggle({ selected, onChange }) {
	return (
		<div className="container uppercase-toggle">
			<ToggleButton
				size="small"
				value={'uc-toggle'}
				selected={selected}
				onChange={() => onChange()}
			>
				<TextFieldsIcon />
			</ToggleButton>
		</div>
	);
}

export default CaseToggle;
