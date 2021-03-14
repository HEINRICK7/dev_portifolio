import React from 'react'
import { Link } from 'react-router-dom'

import { Tooltip } from 'antd'

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { AiOutlineRocket } from 'react-icons/ai'

import Nav from '../../components/Nav'
import About from '../About/index'
import Services from '../../components/Services'
import Connect from '../../components/Contact'
import Footer from '../../components/Footer'
import Skills from '../../components/Skills'

import Profile from '../../img/profile.png'

import './style.css'

const Home = () => {
    return (
        <div id="home">
            <Nav />
            <header className="hero">
                 <div className="section-center hero-center">
                   <article className="hero-info">
                      <div className="underline"></div>
                      <h1>Carlos Henrique</h1>
                      <h4>FullStack Developer & Freelancer</h4>
                      <Link to="./contact" className="btn hero-btn">Contrate-me</Link>
                      <ul className="social-icons hero-icons">
                          <li>
                            <Link to="https://www.facebook.com/heinrick.costa/" target="_blank"  className="social-icon">
                            <Tooltip title="Facebook">
                              < FaFacebook style={{fontSize: 30}}/>
                            </Tooltip>
                            </Link>  
                          </li>
                          <li>
                            <Link to="https://www.linkedin.com/in/heinrickcostta/" target="_blank" className="social-icon">
                            <Tooltip title="Linkedin">
                            < FaLinkedin style={{fontSize: 30}}/>
                            </Tooltip>
                            </Link>
                          </li>
                          <li>
                            <Link to="https://github.com/HEINRICK7" target="_blank" className="social-icon">
                            <Tooltip title="Github">
                            < FaGithub style={{fontSize: 30}}/>
                            </Tooltip>
                            </Link>
                          </li>
                          <li>
                            <Link to="https://app.rocketseat.com.br/me/heinrickcostta" target="_blank" className="social-icon">
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
                      </article>
                   <article className="hero-img">
                     <img src={Profile} className="hero-photo" alt="carlos" />
                   </article>
                 </div>
            </header>
        
            <About />
            <Services />
            <Connect />
            <Skills />
            <Footer />

        </div>
    )
}

export default Home
