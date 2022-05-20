import { TextField, TextFieldProps } from '@mui/material';
import { useField, FieldHookConfig } from 'formik';

const InputField = (props: TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(props);

    return (
        <>
            <TextField
                error={meta.touched && meta.error !== undefined}
                helperText={meta.touched && meta.error}
                fullWidth
                {...field}
                {...props}
            />
        </>
    );
};

export default InputField;
