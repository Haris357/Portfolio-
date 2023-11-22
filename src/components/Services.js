import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Services = () => {
  return (
    <>
        <div className='full-page-content'>
            <Grid container spacing={2} >
                <Grid item xs={12} md={4} >
                <Container maxWidth='sm' className='p-2' sx={{
                    transition: 'background-color 0.3s, transform 0.3s',
                    '&:hover': { 
                    transform: 'scale(1.02)', 
                    },
                }}>
                    <div className='custom-card shadow-lg p-3 rounded-1' >
                        <div className='p-1' >
                         <PrecisionManufacturingIcon sx={{ fontSize: 60 }}/>
                         <hr/>
                         <Typography variant='h5'>
                            <b>Product Building</b>
                         </Typography>
                         <br/>
                         <Typography variant='p'>
                            <b>I am a very good developer</b>
                         </Typography>
                         <Button style={{marginTop:'10%'}} variant='contained' color='success' >
                         <InfoOutlinedIcon style={{marginRight:'5px'}} /> 
                            <b>Know more</b>
                        </Button>
                        </div>     
                    </div>
                </Container> 
                </Grid>
                <Grid item xs={12} md={4} >
                <Container maxWidth='sm' className='p-2' sx={{
                    transition: 'background-color 0.3s, transform 0.3s',
                    '&:hover': { 
                    transform: 'scale(1.02)', 
                    },
                }}>
                    <div className='custom-card shadow-lg p-3 rounded-1' >
                    <div className='p-1' >
                         <TroubleshootIcon sx={{ fontSize: 60 }}/>
                         <hr/>
                         <Typography variant='h5'>
                            <b>Trouble Shooter</b>
                         </Typography>
                         <br/>
                         <Typography variant='p'>
                            <b>I am a very good Shooter</b>
                         </Typography>
                         <Button style={{marginTop:'10%'}} variant='contained' color='success' >
                         <InfoOutlinedIcon style={{marginRight:'5px'}} /> 
                            <b>Know more</b>
                        </Button>
                        </div>
                    </div>
                </Container>
                </Grid>
                <Grid item xs={12} md={4} >
                <Container maxWidth='sm' className='p-2' sx={{
                    transition: 'background-color 0.3s, transform 0.3s',
                    '&:hover': { 
                    transform: 'scale(1.02)', 
                    },
                }}>
                    <div className='custom-card shadow-lg p-3 rounded-1' >
                    <div className='p-1' >
                         <DesignServicesIcon sx={{ fontSize: 60 }}/>
                         <hr/>
                         <Typography variant='h5'>
                            <b>Product Designing</b>
                         </Typography>
                         <br/>
                         <Typography variant='p'>
                            <b>I am a very good Designer</b>
                         </Typography>
                         <Button style={{marginTop:'10%'}} variant='contained' color='success' >
                         <InfoOutlinedIcon style={{marginRight:'5px'}} /> 
                            <b>Know more</b>
                        </Button>
                        </div>
                    </div>
                </Container>
                </Grid>
            </Grid>
        </div>
    </>
      
  )
}

export default Services
