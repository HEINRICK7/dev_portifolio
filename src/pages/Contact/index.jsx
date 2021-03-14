import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'

const Contact = () => {
    return (
        <>
        <section className="section single-page">
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
