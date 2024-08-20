import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function InfoBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',  // Ensure Box takes the full viewport height
        width: 'auto',   // Ensure Box takes the full viewport width
        overflow: 'auto', // Handle any overflow
        p: 2,
        mt: { xl: '' },
      }}
    >
      <Card sx={{ maxWidth: 700, width: '100%', m: 2 }}>
        <CardContent>
          <Typography variant="h6" m={1} fontWeight="bold" fontSize="small">
            Hello, Name maxime
            <Link href="/" style={{ marginLeft: '15px' }}>
              Go to user info
            </Link>
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-around"
          >
            <Card sx={{ maxWidth: 370, width: '100%', mb: { xs: 2, sm: 0 }, border: '1px solid #D3D3D3' }}>
              <CardContent>
                <Typography fontWeight="bold" fontSize="small" color="gray" mt={1}>
                  Your package
                </Typography>
                <Typography fontWeight="bold" fontSize="large" mt={1}>
                  Individual garage
                </Typography>
                <Typography fontSize="small" fontWeight="bold" color="gray" mt={1}>
                  Next renewal
                </Typography>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} mt={1}>
                  <Typography fontSize="small" fontWeight="bold" mt={1}>
                    11/05/2025
                  </Typography>
                  <Button variant="contained" sx={{ mt: { xs: 2, sm: 0 }, ml: { sm: 2 } }}>
                    Renew Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ ml: { sm: 2 }, mt: { xs: 2, sm: 0 }, maxWidth: 470, width: '100%', border: '1px solid #D3D3D3' }}>
              <CardContent>
                <Typography fontWeight="bold" fontSize="small" color="gray" mt={1}>
                  Your support tickets
                </Typography>
                <Typography fontWeight="bold" fontSize="large" mt={1}>
                  1
                </Typography>
                <Button variant="contained" sx={{ mt: 3 }}>
                  View Tickets
                </Button>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default InfoBox;
