import React from 'react'

import Profile from '../../img/profile.svg'

import './style.css'

const About = () => {
    return (
        <div className="about_section" id="about">
            <section className="section about">
              <div className="section-center about-center">
        
                <article >
                  <img
                    src={Profile}
                    className="hero-photo"
                    alt="about img"
                  />
                </article>

                <article className="about-info">

                  <div className="about-title">
                    <h2>sobre</h2>
                    <div className="underline"></div>
                  </div>

                  <p>
                  Olá, meu nome é Carlos Henrique da Costa e sou um desenvolvedor FullStack.Deste modo, FullStack é o programador capaz de dialogar com todas estas tecnologias, sendo elas da área de front-end, ou o “rosto” de um site ou aplicação; back-end, sua estrutura interna; ou banco de dados, sistemas de coleta e armazenamento de informações.
                 </p>
                 <p>
                 Eu moro e trabalho em algum lugar quente. Passo a maior parte do meu dia experimentando HTML, CSS e JavaScript (e sua lista infinita de frameworks). 
                  </p>
                  <p>
                  Gosto de programar e do desafio de aprender algo novo todos os dias. Você também pode me encontrar no canal do youtube CODING ADDICT
                  </p>
                  <a href="about.html" className="btn">sobre mim</a>
                </article>
              </div>
            </section>
        </div>
    )
}

export default About
