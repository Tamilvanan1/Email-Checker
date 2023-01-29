import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';
import Navbar from './components/navbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

const About = () => {
  const [themeSwitch,setThemeSwitch] = useState(false)
  return (
    <div id={themeSwitch ? 'homepage' : "homepage2"}>
        <div id="aboutPage">
            <Navbar
            themeSwitch={themeSwitch}
            setThemeSwitch ={setThemeSwitch}
        />
            <div id="aboutcard">
                <p id={themeSwitch ? 'aboutus' : "aboutus2"}>About Us</p>
                <Card id='imageAbout'>
                    <div >
                        <img id='imageAbout' src='../images/emailcheckerlogo.jpg'/>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Emailchecker
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        We pride ourselves on offering the most accurate email verification on the market, with unprecedented customer support and an easy to use platform.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <form action="https://www.instagram.com">
                        <button id='socialshare'>
                            <a id='instagram' >
                                Share on instagram
                            </a>
                        </button>
                    </form>
                    </CardActions>
                </Card>
                
            </div>
            <p id={themeSwitch ? 'copyrights2' :"copyrights"}>© 2015-2023 All Rights Reserved. Hunter® is a registered trademark of Hunter Web Services, Inc.</p>
            <button id='myinstagramid'>
                <a id='instagram' href="https://instagram.com/im_tamilvanan?igshid=ZDdkNTZiNTM=">
                    <p id="instagramLink"> <InstagramIcon/>Instagram </p>
                </a>
            </button>
            
        </div>
    </div>
  )
}

export default About
