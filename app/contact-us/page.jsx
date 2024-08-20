
import React from 'react'
import { Container } from '@mui/material'
import Team from '../Components/Products/Team'
import ContactHeader from '../Components/ContactUs/ContactHeader'
import Footer from '../Components/HeaderComponents/Footer'
import Products from '../Components/Products/Products'
import Pricing from '../Components/Pricing/Pricing'
import Cards from '../Components/ContactUs/Cards'

function AboutComponents() {
  return (
    <Container>
    <ContactHeader />
    <Cards />
    <Footer />
    </Container>
  )
}

export default AboutComponents
