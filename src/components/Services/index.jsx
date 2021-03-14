import React from 'react'
import { FaCode, FaFigma } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import './style.css'

const Services = () => {
    return (
        <div className="services_section" id="services">
            <section className="section bg-grey">
     
                <div className="section-title">
                  <h2>services</h2>
                  <div className="underline"></div>
                </div>
                
                <div className="services-center section-center ">
                  
                  <article className="service">
                    <i className="service-icon"> 
                        <FaCode />
                    </i>
                    <h4>Front-End development</h4>
                    <div className="underline"></div>
                    <p>
                    Realizo o desenvolvimento técnico e visual de páginas da internet e manutenção de sites, 
                    definindo linguagens, bancos de dados, armazenamento e atualização de informações, a fim de atender o volume de internautas e seu correto funcionamento.

                    </p>
                  </article>
                
                  <article className="service">
                    <i className="service-icon">
                        <IoLogoJavascript />
                    </i>
                    <h4>Back-End Development</h4>
                    <div className="underline"></div>
                    <p>
                    Elaboro toda regra de negócio, segurança, banco de dados e integração de webservices. 
                    Em outras palavras, desde o planejamento até a construção,
                    a implantação e os cuidados com a manutenção da estrutura que suporta a aplicação. codificar e testar os projetos criados. A manutenção dos sistemas também faz parte das minhas tarefas diárias.
                    </p>
                  </article>
                  <article className="service">
                    <i className="service-icon">
                        <FaFigma />
                    </i>
                    <h4>web design</h4>
                    <div className="underline"></div>
                    <p>
                    desenvolvimento de interfaces digitais, como layout de sites e aplicativos para a web e mobile.
                    </p>
                  </article>
                  
                  
                </div>
            </section>
        </div>
    )
}

export default Services
