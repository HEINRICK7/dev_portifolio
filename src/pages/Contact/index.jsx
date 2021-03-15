import React from 'react'

import { Link } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'


import './style.css'

const Contact = () => {
    return (
        <>
        <section className="section single-page">
          <button className="back"><Link to="/" style={{color:"#031a4d", textDecoration:"none"}}>< FaArrowLeft/> Voltar</Link></button>
            <div className="section-title">
              <h1>contato</h1>
              <div className="underline"></div>
            </div>
            <div className="section-center page-info_contact">
              <p>
                  Se você deseja entrar em contato comigo, pode me enviar um e-mail para
                <Link> heinrickcostta@gmail.com</Link>
              </p>
              <p>
              Você também pode me encontrar no Twitter em
                <Link to="https://www.twitter.com">@your_social_media </Link>
              </p>
            </div>
        </section>
        </>
    )
}

export default Contact
