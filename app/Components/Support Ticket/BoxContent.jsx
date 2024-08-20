'use client'
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Card, Grid, TextField, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import SalesIcon from '@mui/icons-material/ShoppingCart';
import BillingIcon from '@mui/icons-material/AccountBalance';
import FeatureIcon from '@mui/icons-material/NewReleases';
import Link from 'next/link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const SupportTickets = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedOption) {
      setStep(2);
    }
  };

  return (
    <Box>
      <Card sx={{ mt: '7%', width: { xs: '90%', sm: '70%' }, mx: 'auto', border: '1px solid #A9A9A9' }}>
        <Container sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
            <Typography variant="h6">My support tickets</Typography>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: { xs: 2, sm: 0 } }}>
              Create new ticket
            </Button>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
            <img src="/search.png" alt="No support tickets" width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
          <Typography align="center" my={3}>You currently have no support tickets</Typography>
        </Container>

        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Open support ticket
            </Typography>

            {/* Progress Bar */}
            <Box display="flex" my={2}>
              <Box sx={{ width: '50%', height: '4px', bgcolor: '#1E90FF', mr: '2px' }} />
              <Box sx={{ width: '50%', height: '4px', bgcolor: step > 1 ? '#1E90FF' : '#d3d3d3' }} />
            </Box>

            {step === 1 && (
              <>
                <Typography variant="subtitle1" gutterBottom>
                  Choose type
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { icon: <SupportIcon />, label: 'Support', description: '24/7 Technical support department' },
                    { icon: <SalesIcon />, label: 'Sales', description: 'Pre sales question support' },
                    { icon: <BillingIcon />, label: 'Billing', description: 'Account billing related support' },
                    { icon: <FeatureIcon />, label: 'Feature', description: 'Request a feature' }
                  ].map((option) => (
                    <Grid item xs={12} key={option.label}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={option.icon}
                        onClick={() => handleOptionChange(option.label)}
                        sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}
                      >
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                          <Typography variant="body1">{option.label}</Typography>
                          <Typography variant="caption">{option.description}</Typography>
                        </Box>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleNextStep} 
                  sx={{ mt: 2 }}
                  disabled={!selectedOption}
                >
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <Typography color={'#808080'}>Name</Typography>
                <Typography fontWeight={'bold'} fontSize={'small'}>Nam maxime</Typography>
                <Typography color={'#808080'}>Email</Typography>
                <Typography fontWeight={'bold'} fontSize={'small'}>joxydef@mailinator.com</Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Department</InputLabel>
                      <Select name="Department">
                        <MenuItem value="department1">Department 1</MenuItem>
                        <MenuItem value="department2">Department 2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Priority</InputLabel>
                      <Select name="Priority">
                        <MenuItem value="priority1">Priority 1</MenuItem>
                        <MenuItem value="priority2">Priority 2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2, mt: 2 }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Link href='/ticket-list'>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2 }}
                    onClick={handleClose}
                  >
                    Submit
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Modal>
      </Card>
    </Box>
  );
};

export default SupportTickets;
