'use client'
import { Box, Button, Card, CardContent, TextField, Typography, Grid } from '@mui/material';
import { useState } from 'react';

function AccountForm() {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for this specific field
    setError((prevError) => ({
      ...prevError,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationError = {};

    // Validate form data
    if (!formData.FirstName.trim()) {
      validationError.FirstName = 'Please enter your first name';
    }
    if (!formData.LastName.trim()) {
      validationError.LastName = 'Please enter your last name';
    }
    if (!formData.Email.trim()) {
      validationError.Email = 'Please enter your email';
    }
    if (!formData.PhoneNumber.trim()) {
      validationError.PhoneNumber = 'Please enter your phone number';
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    } else {
      console.log('Form submitted', formData);
      // Proceed with form submission (e.g., API call)
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
      });
      setError({});
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', bgcolor: '#f5f5f5', p: 3 }}>
      <Card sx={{ maxWidth: 800, width: '100%', p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My account
          </Typography>
          <Typography variant="h6" gutterBottom>
            User information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  fullWidth
                  error={!!error.FirstName}
                  helperText={error.FirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  fullWidth
                  error={!!error.LastName}
                  helperText={error.LastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  fullWidth
                  error={!!error.Email}
                  helperText={error.Email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  fullWidth
                  error={!!error.PhoneNumber}
                  helperText={error.PhoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Update company info
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AccountForm;
