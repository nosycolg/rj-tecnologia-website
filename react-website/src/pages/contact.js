import React from "react";
import Iframe from "react-iframe";
import "../scss/contact.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer/footer";

const Contact = () => {
  return (
    <div className="TelaMain">
      <div className="Tela1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="Caixa1"
        >
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
            <textarea className="text_area"></textarea>
          </label>
          <button className="Botao">Enviar</button>

          <div>
            <motion.img
              src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f680.png"
              className="foguete1"
              initial={{
                zIndex: -9,
                x: -600,
                y: 100,
                scale: 0.1,
                rotate: 40,
              }}
              animate={{
                zIndex: 3,
                x: 180,
                y: -50,
                scale: 1.9,
                rotate: 0,
              }}
              transition={{ duration: 2 }}
            />
          </div>
        </motion.div>

        <div className="Caixa2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="Titulo2"
          >
            {" "}
            Nossas Redes Sociais!{" "}
          </motion.span>

          <div className="subCaixa1">
            <motion.button
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="botaoinst"
            >
              <FaInstagram />
              Instagram
            </motion.button>
            <motion.button
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="botaoface"
            >
              <FaFacebook />
              Facebook
            </motion.button>
            <motion.button
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="botaowpp"
            >
              <FaWhatsapp />
              WhatsApp
            </motion.button>
          </div>

          <div className="MapsBox">
            <div>
              <img
                className="mapspic"
                src="https://cdn.autopapo.com.br/box/uploads/2019/02/04111454/2000px-googlemaps_logo.svg.png"
              />
            </div>

            <label>
              <span className="Texto">Nossa Sede</span>

              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.5483972891325!2d-35.004675295622555!3d-8.030437134223154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1b036662b413%3A0x9c875d4b93c7c58a!2sRJ%20TECNOLOGIA!5e0!3m2!1spt-BR!2sbr!4v1674940414693!5m2!1spt-BR!2sbr"
                width="640px"
                height="320px"
                id="Maps"
                className="Maps"
                display="block"
                position="relative"
              />
            </label>
          </div>
        </div>

        <div class="area">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
