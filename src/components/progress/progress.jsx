import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';

export default function ProgressMobileStepper({ questionNumber }) {
    const theme = useTheme();
    return (
        <MobileStepper
            variant="progress"
            steps={11}
            position="static"
            activeStep={questionNumber}
            sx={{ maxWidth: 1000, flexGrow: 1 }}

        />
    );
}
