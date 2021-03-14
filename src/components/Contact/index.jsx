import React from 'react'

import './style.css'

import ReactPlayer from 'react-player'

import Connect from '../../assets/connect.mp4'

const Contact = () => {
    return (
        <div className="connect_section" id="contact">
          <section className="connect">
            <div className="video-container">
               <ReactPlayer
                width
                height
                controls
                config={{ file: { attributes: {
                    autoPlay: true,
                    muted: true,
                    loop: true
                  }}}}                
                url={Connect}
               />
            </div>
            <div className="video-banner">
        
        <div className="section-title">
          <h2>contato</h2>
          <div className="underline"></div>
        </div>
        
        <p className="video-text">
        Parece que você está interessado nos meus serviços. 
        Posso ajudar você com alguma coisa? só enviar um email ou ligar.
        </p>
        <a href="contact.html" className="btn">contate-me</a>
      </div>
          </section> 
        </div>
    )
}

export default Contact
