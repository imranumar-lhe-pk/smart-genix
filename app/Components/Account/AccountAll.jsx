import { Container } from '@mui/material'
import React from 'react'
import AccountHeader from './AccountHeader'
import AccountForm from './AccountForm'
import UserForm from './UserForm'

function AccountAll() {
  return (
    <Container>
        <AccountHeader />
        <AccountForm />
        <UserForm />
    </Container>
)
}

export default AccountAll