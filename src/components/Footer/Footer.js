import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
        <h1><a href="https://twitter.com/jacquespene8" target="_blank"><FaTwitter /></a></h1>
        <h1><a href="https://www.facebook.com/andrew.penny.10" target="_blank"><FaFacebook /></a></h1>
        <h1><a href="https://www.instagram.com/apenny85/" target="_blank"><FaInstagram /></a></h1>
        <h1><a href="https://github.com/A-Penny" target="_blank"><FaGithub /></a></h1>
        
        </div>
        
    )
}