'use client'
import { Box, Button, ButtonGroup, Card, CardContent, TextField, Typography, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';

function AccountForm() {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    country: '',
    city: '',
    companyPostcode: '',
    companyTelephone: '',
    openingTime: '',
    closingTime: '',
    vehicles: [],
    services: {
      mot: false,
      service: false,
      repairs: false,
      recoveries: false,
      hoursResponse: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Clear the error for this specific field
    setError((prevError) => ({
      ...prevError,
      [name]: '',
    }));
  };

  const handleVehicleToggle = (vehicle) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicles: prevData.vehicles.includes(vehicle)
        ? prevData.vehicles.filter((v) => v !== vehicle)
        : [...prevData.vehicles, vehicle],
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: {
        ...prevData.services,
        [service]: !prevData.services[service],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationError = {};

    // Validate form data
    if (!formData.companyName.trim()) {
      validationError.companyName = 'Please enter company name';
    }
    if (!formData.companyAddress.trim()) {
      validationError.companyAddress = 'Please enter company address';
    }
    if (!formData.city.trim()) {
      validationError.city = 'Please select your city';
    }
    if (!formData.country.trim()) {
      validationError.country = 'Please select your country';
    }
    if (!formData.companyPostcode.trim()) {
      validationError.companyPostcode = 'Please enter postcode';
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    } else {
      console.log('Form submitted', formData);
      // Proceed with form submission (e.g., API call)
      setFormData({
        companyName: '',
        companyAddress: '',
        country: '',
        city: '',
        companyPostcode: '',
        companyTelephone: '',
        openingTime: '',
        closingTime: '',
        vehicles: [],
        services: {
          mot: false,
          service: false,
          repairs: false,
          recoveries: false,
          hoursResponse: false,
        },
      });
      setError({});
    }
  };

  const selection = [
    { img: '/vector.png', description: 'M1 Passenger Cars' },
    { img: '/bus.png', description: 'M2 and M3 Buses and Coaches' },
    { img: '/truck.png', description: 'N1 Vehicles (up to 3500kg)' },
    { img: '/car.png', description: 'N2 and N3 (over 3500kg)' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', bgcolor: '#f5f5f5', p: 3 }}>
      <Card sx={{ maxWidth: 800, width: '100%', p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My account
          </Typography>
          <Typography variant="h6" gutterBottom>
            Company information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company name"
                  fullWidth
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={!!error.companyName}
                  helperText={error.companyName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company address"
                  fullWidth
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  error={!!error.companyAddress}
                  helperText={error.companyAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!error.country}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <MenuItem value="country1">Country 1</MenuItem>
                    <MenuItem value="country2">Country 2</MenuItem>
                  </Select>
                  {error.country && <Typography variant="caption" color="error">{error.country}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!error.city}>
                  <InputLabel>City</InputLabel>
                  <Select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <MenuItem value="city1">City 1</MenuItem>
                    <MenuItem value="city2">City 2</MenuItem>
                  </Select>
                  {error.city && <Typography variant="caption" color="error">{error.city}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company postcode"
                  fullWidth
                  name="companyPostcode"
                  value={formData.companyPostcode}
                  onChange={handleChange}
                  error={!!error.companyPostcode}
                  helperText={error.companyPostcode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company telephone"
                  fullWidth
                  name="companyTelephone"
                  value={formData.companyTelephone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company opening time"
                  fullWidth
                  name="openingTime"
                  value={formData.openingTime}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company closing time"
                  fullWidth
                  name="closingTime"
                  value={formData.closingTime}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Serviceable vehicles</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {selection.map((item, index) => (
                    <Button
                      key={index}
                      variant={formData.vehicles.includes(item.description) ? 'contained' : 'outlined'}
                      onClick={() => handleVehicleToggle(item.description)}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <img src={item.img} alt={item.description} style={{ height: '24px' }} />
                      {item.description}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Services offered</Typography>
                <Grid container spacing={1}>
                  {[
                    { label: 'Offer MOT', value: 'mot' },
                    { label: 'Offer service', value: 'service' },
                    { label: 'Offer repairs', value: 'repairs' },
                    { label: 'Offer recoveries', value: 'recoveries' },
                    { label: 'Out of hours response', value: 'hoursResponse' },
                  ].map((service) => (
                    <Grid item xs={12} sm={6} key={service.value}>
                      <Typography variant="body1">{service.label}</Typography>
                      <ButtonGroup fullWidth>
                        <Button
                          variant={formData.services[service.value] ? 'contained' : 'outlined'}
                          onClick={() => handleServiceToggle(service.value)}
                        >
                          Yes
                        </Button>
                        <Button
                          variant={!formData.services[service.value] ? 'contained' : 'outlined'}
                          onClick={() => handleServiceToggle(service.value)}
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  ))}
                </Grid>
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
