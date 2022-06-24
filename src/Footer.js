import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='container_footer'>
      <div className='container_footer_top'>
        <span>Conditions d'utilisation</span>
        <span>Protection de vos informations personnelles</span>
        <span>Aide</span>
        <span>Cookies</span>
        <span>Annonces basées sur vos centres d’intérêt</span>
        <span></span>
      </div>
      <div className='container_footer_down'>
        <span>© 1996-2022, Amazon.com Inc. ou ses affiliés</span>
      </div>
    </div>
  )
}

export default Footer
