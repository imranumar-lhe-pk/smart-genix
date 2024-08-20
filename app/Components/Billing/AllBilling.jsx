import React from 'react'
import BillingHeader from './BillingHeader'
import TicketList from './TicketList'
import { Container } from '@mui/material'

function AllBilling() {
  return (
    <Container>

        <BillingHeader />
        <TicketList />
    </Container>
  )
}

export default AllBilling