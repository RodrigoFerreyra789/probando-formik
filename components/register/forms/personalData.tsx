import Box from '@mui/material/Box';
import InputField from '../../formFields/inputField';

const PersonalData = () => {
    return (
        <Box>
            <InputField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="first Name"
                sx={{ mb: 3 }}
            />

            <InputField
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="last Name"
                sx={{ mb: 3 }}
            />
            <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
            />
        </Box>
    );
};

export default PersonalData;
