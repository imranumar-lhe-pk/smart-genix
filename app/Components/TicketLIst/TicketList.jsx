'use client'
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import SalesIcon from '@mui/icons-material/ShoppingCart';
import BillingIcon from '@mui/icons-material/AccountBalance';
import FeatureIcon from '@mui/icons-material/NewReleases';

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

const TicketList = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tickets = [
    { id: 36, department: 'Billing', subject: 'Test', status: 'Answered', lastUpdated: '11/05/2024' },
    // Add more tickets as needed
  ];

  return (
    <Box>
      <Container>
        <Card sx={{ mt: '7%', border: '1px solid #A9A9A9' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} flexDirection={{ xs: 'column', sm: 'row' }}>
            <Typography variant="h6">My support tickets</Typography>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: { xs: 2, sm: 0 } }}>
              Create new ticket
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Updated</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.department}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" size="small">
                        {ticket.status}
                      </Button>
                    </TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.department}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" size="small">
                        {ticket.status}
                      </Button>
                    </TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.department}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" size="small">
                        {ticket.status}
                      </Button>
                    </TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.department}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" size="small">
                        {ticket.status}
                      </Button>
                    </TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </Box>
  );
};

export default TicketList;
