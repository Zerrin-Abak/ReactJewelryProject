import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <p>Tüm hakları Saklıdır.</p>
    </div>
  )
}

export default Footer