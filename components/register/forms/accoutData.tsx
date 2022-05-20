import { Box } from '@mui/material';
import CheckboxField from '../../formFields/checkBox';
import InputField from '../../formFields/inputField';

const AccountData = () => {
    return (
        <Box>
            <InputField
                label="username"
                name="username"
                type="text"
                placeholder="username"
                sx={{ mb: 3 }}
            />

            <InputField
                label="password"
                name="password"
                type="password"
                placeholder="password"
                sx={{ mb: 3 }}
            />

            <InputField
                label="confirm password"
                name="passwordConfirmation"
                type="password"
                placeholder="confirm password"
                sx={{ mb: 3 }}
            />

            <CheckboxField label="terms and conditions" name="terms" />
        </Box>
    );
};

export default AccountData;
