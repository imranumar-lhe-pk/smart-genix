import { Box } from '@mui/material'
import React from 'react'
import TicketHeader from './TicketHeader'
import TicketList from './TicketList'

function AllTickets() {
  return (
  <Box>
    <TicketHeader />
    <TicketList />
  </Box>
  )
}

export default AllTickets