'use client'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Boxes() {
    const [showDashboard, setShowDashnoard] = useState(false)
    const [showUserDashboard, setShowUserDashboard] = useState(false)

    const handleToggle = () => {
        setShowDashnoard(!showDashboard)
    }

    const handleUserToggle = () => {
        setShowUserDashboard(!showUserDashboard)
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }} flexWrap="wrap"  sx={{ gap: 2, mt:{xl:''} }}>
            <Box>
                <Card sx={{ maxWidth: 370, width: { xs: '90%', sm: '100%', lg: '100%', xl: '100%' }, mb: { xs: 2, sm: 2 }, border: '1px solid #D3D3D3',  }}>
                    <CardContent>
                        <Typography fontWeight="bold" fontSize="large" mt={1}>
                            Shortcuts
                        </Typography>
                        <Box mt={1}>
                            <Typography fontSize="small">
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    onClick={handleToggle}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Visit the mechanic dashboard
                                    {showDashboard ? <KeyboardArrowDownIcon sx={{ fontSize: '15px', color: 'gray' }} /> : <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />}
                                </Box>
                            </Typography>
                            {showDashboard && (
                                <Box mt={2}>
                                    <Button variant="contained" color="primary">
                                        Mechanic Dashboard
                                    </Button>
                                </Box>
                            )}
                        </Box>
                        <Box mt={1}>
                            <Typography fontSize="small">
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    onClick={handleUserToggle}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Visit the user dashboard
                                    {showUserDashboard ? <KeyboardArrowDownIcon sx={{ fontSize: '15px', color: 'gray' }} /> : <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />}
                                </Box>
                            </Typography>
                            {showUserDashboard && (
                                <Box mt={2}>
                                    <Button variant="contained" color="primary">
                                        User Dashboard
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 370, width: '100%', mb: { xs: 2, sm: 0 }, border: '1px solid #D3D3D3' }}>
                    <CardContent>
                        <Typography fontWeight="bold" fontSize="small" mt={1}>
                            Company notices
                        </Typography>
                        <Box mt={1}>
                            <Typography fontSize="small" fontWeight="bold">
                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                    New design
                                    <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                                </Box>
                                <Typography fontSize="10px" color="gray">
                                    06/05/2024 07:01 AM
                                </Typography>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography fontSize="small" fontWeight="bold">
                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                    New product
                                    <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                                </Box>
                                <Typography fontSize="10px" color="gray">
                                    06/05/2024 07:01 AM
                                </Typography>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            <Card sx={{ maxWidth: 320, height:{xl:'25vh', sm:'60vh'}, width: '100%', ml: { xs: 0, sm: '10px' }, mb: { xs: 2, sm: 0 }, border: '1px solid #D3D3D3' }}>
                <CardContent>
                    <Typography fontWeight="bold" fontSize="large" mt={1}>
                        Service notices
                    </Typography>
                    <Box mt={1}>
                        <Typography fontSize="small" fontWeight="bold">
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                Design update
                                <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                            </Box>
                            <Typography fontSize="10px" color="gray">
                                06/05/2024 07:01 AM
                            </Typography>
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography fontSize="small" fontWeight="bold">
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                New product
                                <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                            </Box>
                            <Typography fontSize="10px" color="gray">
                                06/05/2024 07:01 AM
                            </Typography>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 320, height:{xl:'25vh', sm:'60vh'}, width: '100%', ml: { xs: 0, sm: '10px' }, border: '1px solid #D3D3D3' }}>
                <CardContent>
                    <Typography fontWeight="bold" fontSize="small" mt={1}>
                        Recent support tickets
                    </Typography>
                    <Box mt={1}>
                        <Typography fontSize="small" fontWeight="bold">
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                Test
                                <Button sx={{ ml: '-38%', border: '1px solid #289800', backgroundColor: '#C9FFC8', color: '#289800', borderRadius: '20px' }}>
                                    ANSWERED
                                </Button>
                                <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                            </Box>
                            <Typography fontSize="10px" color="gray">
                                06/05/2024 07:01 AM
                            </Typography>
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography fontSize="small" fontWeight="bold">
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
                                Test
                                <Button sx={{ ml: '-38%', border: '1px solid #289800', backgroundColor: '#C9FFC8', color: '#289800', borderRadius: '20px' }}>
                                    ANSWERED
                                </Button>
                                <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'gray' }} />
                            </Box>
                            <Typography fontSize="10px" color="gray">
                                06/05/2024 07:01 AM
                            </Typography>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Boxes
