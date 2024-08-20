'use client';

import { Box, Button, Card, Container, TextField, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Cards() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [completeForm, setCompleteForm] = useState(true);
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validationError = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!formData.firstName.trim()) {
      validationError.firstName = 'Please Enter First Name';
    }
    if (!formData.lastName.trim()) {
      validationError.lastName = 'Please Enter Last Name';
    }
    if (!formData.email.trim()) {
      validationError.email = 'Please Enter Email';
    } else if (!regex.test(formData.email)) {
      validationError.email = 'Email is invalid';
    }
    setErrors(validationError);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const isFormComplete = () => {
    setCompleteForm(!Object.values(formData).every((value) => value.trim() !== ''));
  };

  useEffect(() => {
    isFormComplete();
  }, [formData]);

  return (
    <Container>
      <Box>
        <Typography fontSize={22} fontWeight="bold" textAlign="center" mt={6}>
          Contact US
        </Typography>
      </Box>
      <Grid container spacing={3} mt={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ border: '1px solid gray', borderRadius: '10px', height: '100%' }}>
            <Typography pt={1} ml={3} fontWeight="bold">
              Billing Queries
            </Typography>
            <Box component="img" m={2} width="100%" src="/contact.png" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ border: '1px solid gray', borderRadius: '10px', height: '100%' }}>
            <Typography pt={1} ml={3} fontWeight="bold">
              Sales Queries
            </Typography>
            <Box component="img" m={2} width="100%" src="/contact.png" />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ border: '1px solid gray', borderRadius: '10px', p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Send us a quick message
            </Typography>
            <form onSubmit={submitHandler}>
              <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    value={formData.firstName}
                    fullWidth
                    onChange={handleChange}
                  />
                  {errors.firstName && <Typography color="error">{errors.firstName}</Typography>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    value={formData.lastName}
                    fullWidth
                    onChange={handleChange}
                  />
                  {errors.lastName && <Typography color="error">{errors.lastName}</Typography>}
                </Grid>
              </Grid>
              <Box mb={2}>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  fullWidth
                  onChange={handleChange}
                />
                {errors.email && <Typography color="error">{errors.email}</Typography>}
              </Box>
              <Box mb={2}>
                <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                <Typography variant="caption">optional</Typography>
              </Box>
              <Box textAlign="center">
                <Button type="submit" variant="contained" disabled={completeForm} color="primary">
                  Send Queries
                </Button>
              </Box>
            </form>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ border: '1px solid gray', borderRadius: '10px', bgcolor: '#020E3F', height: '100%' }}>
            <Typography variant="h6" fontWeight="bold" mb={2} color="white" m={2}>
              Our Offices
            </Typography>
            <Box component="img" width="90%" m={1} src="/offices.png" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cards;
