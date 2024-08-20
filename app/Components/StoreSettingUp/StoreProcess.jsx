// StoreProcess.js
import React from 'react';
import { Box, Typography, Alert, Card, CardContent } from '@mui/material';

const StoreProcess = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', backgroundColor: 'white' }}>
      <Card sx={{ maxWidth: 345, width: '100%', m: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>

        <Box component="img" src="/undraw_loading.png" alt="Store Setting Up" height={200} sx={{ width: '100%', height: 'auto' }} />
        <Typography variant="h6" mt={2}>
          Please wait! We are adding your information to our database
        </Typography>
        <Alert severity="warning" mt={2}>
          Do not refresh the page or hit the back button while we carry out this update
        </Alert>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StoreProcess;
