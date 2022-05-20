import { Stepper as MuiSteeper, Step, StepLabel } from '@mui/material';

type StepperProps = {
    steps: string[];
    activeStep: number;
    completed: boolean;
};

const Steeper = ({ steps, activeStep, completed }: StepperProps) => {
    return (
        <MuiSteeper alternativeLabel activeStep={activeStep}>
            {steps.map((label) => (
                <Step key={label} completed={completed}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </MuiSteeper>
    );
};

export default Steeper;
