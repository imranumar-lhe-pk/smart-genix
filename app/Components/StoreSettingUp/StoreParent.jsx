'use client'
import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import StoreProcess from './StoreProcess';
import Step4 from './Step4';
import StoreHeader from './StoreHeader';

const StoreParent = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 2000); // Change the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <StoreHeader />
      <Box mt={3} sx={{ px: { xs: 2, sm: 3 } }}>
        {step === 1 ? <StoreProcess /> : <Step4 />}
      </Box>
    </Box>
  );
};

export default StoreParent;
