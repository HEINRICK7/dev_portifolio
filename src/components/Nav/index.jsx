import React, { useState } from 'react'

import { Link } from 'react-scroll'

import Logo from '../../img/logo.svg'

import './style.css'

const Nav = () => {

  const [ navbar, setNavbar] = useState(false)


  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
    return (
      <nav className={navbar ? 'navbar-fixed' : 'nav'} id="nav">
        <div className="nav-center">
        
          <div className="nav-header">
            <img src={Logo} className="nav-logo" width="300px" alt="nav logo" />
            <button className="nav-btn" id="nav-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
    
          <ul className="nav-links">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>  
            </li>
            <li>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sobre
              </Link>  
            </li>
            <li>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Serviços
              </Link>  
            </li>
            <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </Link>  
            </li>
            <li>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>  
            </li>
        </ul>
        </div>
      </nav>
    )
}

export default Nav
