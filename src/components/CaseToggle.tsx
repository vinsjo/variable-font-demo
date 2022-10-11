import { ToggleButton } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';

function CaseToggle(props: { selected?: boolean; onChange?: () => void }) {
    return (
        <div className="container uppercase-toggle">
            <ToggleButton
                size="small"
                value={'uc-toggle'}
                selected={props.selected}
                onChange={props.onChange}
            >
                <TextFieldsIcon />
            </ToggleButton>
        </div>
    );
}

export default CaseToggle;
