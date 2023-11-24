import { Grid, Typography } from '@mui/material'
import React from 'react'

const Experiences = () => {
  return (
    <>
    <div className='full-page-content' id='experiencesection'>
    <Grid container spacing={2} >
        <Grid item xs={12} md={5}>
            <div className='text-center p-5 rounded-1' >
                <div className='p-5' >
                    <div>
                        <Typography variant='h3' color={'limegreen'} style={{ display: 'block' }}>
                            <b>2</b>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' style={{ display: 'block' }}>
                            <b>Year Experience</b>
                        </Typography>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item xs={12} md={7}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} >
                <div className='custom-card shadow-sm text-center p-5 rounded-1' >
                    <div className='contentExp' >
                        <div>
                            <Typography variant='h4' color={'limegreen'} style={{ display: 'block' }}>
                                <b>15+</b>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h6' style={{ display: 'block' }}>
                                <b>Clients</b>
                            </Typography>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} md={6} >
                <div className='custom-card shadow-sm text-center p-5 rounded-1' >
                <div className='contentExp' >
                    <div>
                        <Typography variant='h4' color={'limegreen'} style={{ display: 'block' }}>
                            <b>02</b>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' style={{ display: 'block' }}>
                            <b>Year Experience</b>
                        </Typography>
                    </div>
                </div>
                </div>
                </Grid>
                <Grid item xs={12} md={6} >
                <div className='custom-card shadow-sm text-center p-5 rounded-1' >
                <div className='contentExp' >
                    <div>
                        <Typography variant='h4' color={'limegreen'} style={{ display: 'block' }}>
                            <b>20+</b>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' style={{ display: 'block' }}>
                            <b>Projects</b>
                        </Typography>
                    </div>
                </div>
                </div>
                </Grid>
                <Grid item xs={12} md={6} >
                <div className='custom-card shadow-sm text-center p-5 rounded-1' >
                <div className='contentExp' >
                    <div>
                        <Typography variant='h4' color={'limegreen'} style={{ display: 'block' }}>
                            <b>10</b>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' style={{ display: 'block' }}>
                            <b>Achievements</b>
                        </Typography>
                    </div>
                </div>
                </div>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </div> 
    </>
  )
}

export default Experiences