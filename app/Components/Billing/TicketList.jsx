'use client'
import React, { useState } from 'react';
import { Box, Button, Typography, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Grid } from '@mui/material';

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
  const tickets = [
    { id: 36, department: 'Billing', subject: '11/05/2024', status: 'Answered', lastUpdated: '11/05/2024', total: 'QAR5,879.08' },
    // Add more tickets as needed
  ];

  return (
    <Box>
      <Container>
        <Card sx={{ mt: '7%', border: '1px solid #A9A9A9' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6">Billing</Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Invoice</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Invoice Date</TableCell>
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
