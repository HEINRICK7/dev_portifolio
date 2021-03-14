import React from 'react'

import { Link } from 'react-router-dom'

import { Tooltip } from 'antd'

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { AiOutlineRocket } from 'react-icons/ai'


import './style.css'

const Footer = () => {
    return (
        <>
    <footer className="footer">
      <ul className="social-icons">
      <ul className="social-icons hero-icons">
            <li>
              <Link to="https://www.facebook.com/heinrick.costa/" target="_blank"  className="social-icon">
              <Tooltip title="Facebook">
                < FaFacebook style={{fontSize: 30}}/>
              </Tooltip>
              </Link>  
            </li>
            <li>
              <Link to="https://www.twitter.com" className="social-icon">
              <Tooltip title="Linkedin">
              < FaLinkedin style={{fontSize: 30}}/>
              </Tooltip>
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com" className="social-icon">
              <Tooltip title="Github">
              < FaGithub style={{fontSize: 30}}/>
              </Tooltip>
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com" className="social-icon">
              <Tooltip title="Rocketseat">   
              < AiOutlineRocket style={{fontSize: 30}}/>
              </Tooltip> 
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com" className="social-icon">
              <Tooltip title="Instagram">
              < FaInstagram style={{fontSize: 30}}/>
              </Tooltip> 
              </Link>
            </li>
          </ul>
      </ul>

      <p>&copy; <span id="date"></span> Carlos Henrique. all rights reserved</p>
    </footer>
        </>
    )
}

export default Footer
