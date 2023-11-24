import { Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import GigBazaar from '../img/B.mp4'
import Unimentor from '../img/Uni-Mentor.mp4'
import Crud from '../img/crud.png'
import Shop from '../img/online-shop-logo.jpg'

const Projects = () => {
  return (
    <>
    <div className='full-page-content' id='projectsection' >
        <div>
            <Typography variant='h6'><b>FEATURED PROJECTS</b></Typography>
            <div className='buttonend' >
            <Button href='https://github.com/Haris357' variant="outlined" color={'success'} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}> <VisibilityOutlinedIcon style={{marginRight:'5px'}} />  <b>View All</b></Button>
            </div>
        </div>
        <br/>
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white video-container' >
            <video autoPlay loop muted playsInline style={{ width: '50%' }}>
              <source src={GigBazaar} type="video/mp4" />
            </video>
            <div className="description">
            Gig Bazaar, a dynamic marketplace powered by the MERN stack (React, MongoDB, Express, and Node.js), connects freelancers with job opportunities and clients with top talent. This platform is enriched with Web3 integration, facilitating Ethereum-based payments, making it a cutting-edge solution. Currently in active development, Gig Bazaar promises to revolutionize the gig economy.
            </div>
            </div>
            <hr/>
            <Typography variant='h6'><b>Gig-Bazaar</b></Typography>
            <div className='buttonend' >
                <IconButton href='https://github.com/Haris357'  >
                    <GitHubIcon />
                </IconButton>
                <IconButton href='https://deverse-so.web.app/' >
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white video-container' >
            <video autoPlay loop muted playsInline style={{ width: '50%' }}>
              <source src={Unimentor} type="video/mp4" />
            </video>
            <div className="description">
            Unimentor is your ultimate student guide to navigating the university experience. Built with AngularJS and powered by Firebase, Unimentor provides a seamless and dynamic platform to help students succeed in their academic journey. With a sleek and user-friendly interface designed using Material UI, Unimentor offers students a comprehensive set of tools and resources to enhance their university life. From academic support to social connections, Unimentor is your trusted companion on the path to educational success.
            </div>
            </div>
            <hr/>
            <Typography variant='h6'><b>Uni-Mentor</b></Typography>
            <div className='buttonend' >
                <IconButton href='https://github.com/Haris357' >
                    <GitHubIcon/>
                </IconButton>
                <IconButton href='https://unimentorco.web.app/' >
                    <LanguageIcon />
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white video-container' >
            <img src={Crud} style={{ width: '99%' }} alt="Logo" />
            <div className="description">
            Simple Create,Read,Update & Delete Application Created in .Net MVC With SQL Server Database. 
            </div>
            </div>
            <hr/>
            <Typography variant='h6'><b>Crud Operations</b></Typography>
            <div className='buttonend' >
                <IconButton href='https://github.com/Haris357/CRUD-Operations-.NET-MVC' >
                    <GitHubIcon/>
                </IconButton>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
            </div>
            <hr/>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className='shadow-lg p-3 rounded-1 bg-white video-container' >
            <img src={Shop} style={{ width: '100%' }} alt="Logo" />
            <div className="description">
            Online Shop is simple ASP.NET MVC Application that can save items and calculate amount.It is created on .Net MVC with SQL SERVER and Bootstrap for UI. 
            </div>
            </div>
            <hr/>
            <Typography variant='h6'><b>Online Shop</b></Typography>
            <div className='buttonend' >
                <IconButton href='https://github.com/Haris357/Master-Detail-Form-in-.NET-MVC' >
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
