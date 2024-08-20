import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import Link from 'next/link';
const Step4 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card sx={{ maxWidth: 345, width: '100%', m: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Box component="img" src="/undraw_approve.png" alt="Step 4" height={300} sx={{ width: '100%', height: 'auto', mt: 2 }} />
          <Typography variant="h6" mt={2}>
            Congratulations! You are now part of the family, welcome aboard!
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            View account
          </Button>

          <Link href='/dashboard' >
          <Button  variant="contained" color="primary">
          View dashboard
          </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Step4;
