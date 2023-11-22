import { Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Projects = () => {
  return (
    <>
    <div className='full-page-content' >
        <div>
            <Typography variant='h6'><b>FEATURED PROJECTS</b></Typography>
            <div className='buttonend' >
            <Button variant="outlined" color={'success'} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}> <VisibilityOutlinedIcon style={{marginRight:'5px'}} />  <b>View All</b></Button>
            </div>
        </div>
        <br/>
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white' >

            </div>
            <hr/>
            <div className='buttonend' >
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white' >

            </div>
            <hr/>
            <div className='buttonend' >
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white' >

            </div>
            <hr/>
            <div className='buttonend' >
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white' >

            </div>
            <hr/>
            <div className='buttonend' >
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
        </Grid>
    </div> 
    </>
  )
}

export default Projects
