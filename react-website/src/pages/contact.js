import React from "react";
import Iframe from 'react-iframe'
import "../scss/contact.scss";
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Contact = () => {

  return (

    <div className="Tela1">
    <div className="Caixa1">
    <span className="Titulo">Entre em Contato Conosco!</span>
      <label className="Area">
      <span className="Texto">Email:</span>
          <input className="inputs" type="text" name="name" />
        </label>
      <label className="Area">
      <span className="Texto">Nome:</span>
          <input className="inputs" type="text" name="name" />
        </label>
      <label className="Area">
        <span className="Texto">Escreva sua mensagem:</span>
        <textarea className="text_area" >
        </textarea>
        </label>
        <button className="Botao">Enviar</button>
    </div>

    <div className="Caixa2">

    <span className="Titulo2"> Nossas Redes Sociais! </span>

      <div className="subCaixa1">

        <button className="botaoinst"><FaInstagram/>Instagram</button>
        <button className="botaoface"><FaFacebook/>Facebook</button>
        <button className="botaowpp"><FaWhatsapp/>WhatsApp</button>

      </div>

      <div className="MapsBox">
      <label>

        <span className="Texto">Nossa Sede</span>

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.5483972891325!2d-35.004675295622555!3d-8.030437134223154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1b036662b413%3A0x9c875d4b93c7c58a!2sRJ%20TECNOLOGIA!5e0!3m2!1spt-BR!2sbr!4v1674940414693!5m2!1spt-BR!2sbr" width="640px"
        height="320px"
        id="Maps"
        className="Maps"
        display="block"
        position="relative"/>

        </label>

      </div>

    </div>

    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    </div>
    
  );
};

export default Contact;