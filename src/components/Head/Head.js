import React from 'react';
import img from '../images/Mepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Head() {
    return (
        <div className='head'>
            <img src={img} alt='placeholder'/>
            <h1 className='name'>Andrew Penny</h1>
            <p className='job-description'>Full-stack Developer</p>
            <p className='site'>andrewpenny.website</p>
            <div className='buttons'>
            <button className='email-button'><HiOutlineMail />Email</button>
            <a href="https://www.linkedin.com/in/andrew-penny-631933207/" target="_blank"><button className='linkedin-button'><FaLinkedin />LinkedIn</button></a>
            </div>
        </div>
    )
}