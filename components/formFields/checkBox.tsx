import { useField } from 'formik';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
} from '@mui/material';

const CheckboxField = (props: any) => {
    const { label, ...rest } = props;
    const [field, { touched, error }] = useField({
        ...props,
        type: 'checkbox',
    });

    return (
        <FormControl {...rest}>
            <FormControlLabel
                value={field.checked}
                checked={field.checked}
                control={<Checkbox {...field} />}
                label={label}
            />
            {touched && error && (
                <FormHelperText sx={{ color: 'red' }}>{error}</FormHelperText>
            )}
        </FormControl>
    );
};

export default CheckboxField;
