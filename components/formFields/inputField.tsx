import { TextField, TextFieldProps } from '@mui/material';
import { useField, FieldHookConfig } from 'formik';

interface OtherProps {
    label: string;
}

const InputField = ({
    label,
    ...rest
}: OtherProps & TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(rest);

    return (
        <>
            <TextField
                error={meta.touched && meta.error !== undefined}
                helperText={meta.touched && meta.error}
                fullWidth
                {...field}
                {...rest}
            />
        </>
    );
};

export default InputField;
