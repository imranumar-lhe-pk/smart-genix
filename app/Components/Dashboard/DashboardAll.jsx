import { Box, Container } from '@mui/material'
import React from 'react'
import DashboardHeader from './DashboardHeader'
import InfoBox from './InfoBox'
import Boxes from './Boxes'
import AccountForm from '../Account/AccountForm'
function DashboardAll() {
  return (
    <Container>
        <DashboardHeader />
        <InfoBox />
        <Boxes />
        <AccountForm />
    </Container>
)
}

export default DashboardAll