import { Avatar, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import myimg from '../img/MyImg2.jpg';
const Profile = () => {
  return (
    <>
      <div className='full-page-content' >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} align="center">
            <Avatar alt="Your Name" src={myimg} sx={{ width: 300, height: 300 }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant='h6' color='green' >
              <b>Hello, I'm Haris Muhammad Imran</b>
            </Typography>
            <br/>   
            <Typography variant='h3'>
              <b>Software Developer</b>
            </Typography>
            <br/>
            <Typography variant='p'>
              I am a software developer with a passion for crafting code that can change the world. I immerse myself in the architecture of systems, finding beauty in lines of code that work in harmony to solve complex problems. My journey in this field is driven by constant learning, as technology's ever-evolving nature means there's always a new language to master or a framework to explore.
            </Typography>
            <br/>
            <div className=''>
              <Button style={{marginTop:'3%'}} variant='contained' color='success'>
                 <b>About me</b>
              </Button>
            </div>
            <br/>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Profile
