import { useState } from 'react';
import { Formik, Form } from 'formik';
import type { NextPage } from 'next';
import { Card, Box, CircularProgress, Button } from '@mui/material';
import Head from 'next/head';
import AccountData from '../components/register/forms/accoutData';
import PersonalData from '../components/register/forms/personalData';
import registerValidators from '../components/register/validators/registerValidator';
import Steeper from '../components/stepper/stepper';
import styles from '../styles/Home.module.css';
import { fakeApiCall } from '../utils/fakeApiCall';

interface RegisterFormValues {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

type RegisterStepsCount = 0 | 1;

const renderStep = (step: RegisterStepsCount) => {
    switch (step) {
        case 0:
            return <PersonalData />;
        case 1:
            return <AccountData />;
        default:
            return <h1>Nothing here</h1>;
    }
};

const registerSteps = ['Personal Data', 'Account Data'];

const Home: NextPage = () => {
    const [activeStep, setActiveStep] = useState<RegisterStepsCount>(0);
    const [registrationCompleted, setRegistrationCompleted] = useState(false);
    const currentValidationSchema = registerValidators[activeStep];
    const isLastStep = activeStep === registerSteps.length - 1;
    const isFirstStep = activeStep === 0;

    const handleSubmit = async (
        values: RegisterFormValues,
        actions: {
            setTouched: (arg0: {}) => void;
            setSubmitting: (arg0: boolean) => void;
        }
    ) => {
        if (isLastStep) {
            await fakeApiCall(5000);
            alert(JSON.stringify(values, null, 2));
            setRegistrationCompleted(true);
            return;
        }

        setActiveStep((prev) => (prev + 1) as RegisterStepsCount);
        actions.setSubmitting(false);
    };

    const handleBack = () => {
        setActiveStep((prev) => (prev - 1) as RegisterStepsCount);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Formik</title>
            </Head>

            <main className={styles.main}>
                <Card
                    sx={{
                        p: 7,
                        maxWidth: 768,
                    }}
                >
                    <Box
                        sx={{
                            mb: 5,
                        }}
                    >
                        <Steeper
                            steps={registerSteps}
                            activeStep={activeStep}
                            completed={registrationCompleted}
                        />
                    </Box>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            username: '',
                            password: '',
                            passwordConfirmation: '',
                        }}
                        validationSchema={currentValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, dirty, isValid }) => (
                            <Form>
                                <Box sx={{ mb: 5 }}>
                                    {renderStep(activeStep)}
                                </Box>
                                {!isFirstStep && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleBack}
                                        disabled={isSubmitting}
                                        sx={{ mr: 2 }}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    endIcon={
                                        isSubmitting && (
                                            <CircularProgress size={15} />
                                        )
                                    }
                                    disabled={
                                        isSubmitting || !isValid || !dirty
                                    }
                                >
                                    {isLastStep ? 'Register' : 'Next'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </main>
        </div>
    );
};

export default Home;
