import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <>
      <div className='shadow-lg p-5 text-white text-center rounded-1 bg-dark' >
        <Grid container spacing={2} >
            <Grid item xs={12} md={5} >
                <Typography variant='h5' color={'limegreen'} ><b>Haris j.</b></Typography>
            </Grid>
            <Grid item xs={12} md={3} >
                <IconButton color='primary' >
                    <FacebookIcon/>
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/haris-muhammad-imran-838b63230/' color='primary' >
                    <LinkedInIcon/>
                </IconButton>
                <IconButton color='secondary' >
                    <InstagramIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={12} md={4} >
                <IconButton color='error' >
                    <FavoriteIcon/>
                </IconButton>
                <span><b>Created By Haris</b></span>
            </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Footer
