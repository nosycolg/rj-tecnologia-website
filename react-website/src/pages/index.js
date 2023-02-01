import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer/footer";
import image1 from "../images/300mega.png";
import image2 from "../images/400mega.png";
import "../scss/indexStyle.scss";
import Card from "../components/Card/card";
import { motion as m } from "framer-motion";
import Waves from '../images/wave.svg'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Iframe from "react-iframe";


const images = [image1, image2];

const Home = () => {
  const carousel = useRef();
  const [Width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (

    <div className="Site10">
        <m.a
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 100, x: "0%" }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="whatsapp-link" 
        href="https://web.whatsapp.com/send?phone=5547992806521" 
        target="_blank">
	      <FaWhatsapp className="fa-whatsapp" />
        </m.a>
      <m.div
        className="View1"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 100, y: "0%" }}
        transition={{ duration: 0.75 }}
      >
        <div
          ref={carousel}
          className="carousel"
        >
          <m.div
            className="inner-carousel"
            initial={{ 
              x: 0
            }}
            animate={{ 
              x: -Width
            }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "mirror", repeatDelay: 5}}
            dragConstraints={{ right: 0, left: -Width }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
          >
            {images.map((image) => (
              <m.div className="item" key={image}>
                <img src={image} alt="Texto alt" />
              </m.div>
            ))}
          </m.div>
        </div>
      </m.div>
      <>
        <div className="precos">
        <div className="container">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 100, y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Planos Fibra Residêncial
          </m.h1>
          <m.h3
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 100, y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Assine um de nossos planos e navegue em ultra velocidade.
          </m.h3>
        </div>
        <m.div
        className="cards"
        initial={{ opacity: 25, y: "100%" }}
        animate={{ opacity: 100, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <m.img
        className="Card"
                initial={{ zIndex: 1 }}
                whileHover={{ zIndex: 100, scale: 1.2 }}
                whileTap={{ zIndex: 100, scale: 1.1 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
          src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/50.png"
        />
        <m.img
        className="Card"
                          initial={{ zIndex: 1 }}
                          whileHover={{ zIndex: 100, scale: 1.2 }}
                          whileTap={{ zIndex: 100, scale: 1.1,  }}
                          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/100.png"
        />
        <m.img
          className="Card"
          initial={{ zIndex: 1 }}
                          whileHover={{ zIndex: 100, scale: 1.2 }}
                          whileTap={{ zIndex: 100, scale: 1.1 }}
                          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/200.png"

        />
        <m.img
          className="Card"
          initial={{ zIndex: 1 }}
                          whileHover={{ zIndex: 100, scale: 1.2 }}
                          whileTap={{ zIndex: 100, scale: 1.1 }}
                          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/300.png"

        />
        <m.img
          className="Card"
          initial={{ zIndex: 1 }}
                          whileHover={{ zIndex: 100, scale: 1.2 }}
                          whileTap={{ zIndex: 100, scale: 1.1 }}
                          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/500.png"

        />
      </m.div>
      </div>
      </>
      <>
      <div className="about11">
        <div className="aboutItem1">
          <m.h1 className="QuemSomos1"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Quem somos?
          </m.h1>
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Somos um provedor de internet com mais de 10 anos no mercado,
            atuando no conceito de tecnologia isp, fornecendo serviços de
            internet, interfone, tv e telefone. Homologados pela Anatel e
            reconhecido por um dos melhores atendimentos e satisfação por nossos
            clientes e parceiros, nosso orgulho é fazer parte da vida de amigos
            e parceiros.
          </m.p>

          <img className="ondas1" src={Waves} alt="Ondas"/>

        </div>
        <div className="img">
          <m.img
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            src="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/03-1024x614.jpeg"
            alt=""
          />
        </div>
        </div>
        <div className="about2">
          <div className="prop">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              Propósito
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Nosso ideal é levar aos nossos clientes e parceiros, Comodidade,
              conforto e entretimento através de nossa tecnologia, de forma que
              o crescimento seja amplo em todas as necessidades e buscar pelo
              acesso do acervos infinito da internet, nosso marco é ter a
              satisfação do nosso publico direto e indireto e cumprir de forma
              verdadeiro o nosso chamado.
            </m.p>
          </div>
          <div className="patroc">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              Patrocínio
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              Nos temos a satisfação da oportunidade de poder participar dos
              muitos eventos dentro e fora da nossa cidade, levando apoio a
              eventos filantrópicos privados e públicos; tipo, shows, campeonato
              de futebol, maratona, feiras, lives musical, lançamentos e
              novidade em muitos dos seguimento da sociedade, nossa marca esta
              presente como apoio, patrocinador e parceiro em pequenos médios e
              grandes eventos.
            </m.p>
          </div>
        </div>
        <div className="about3">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Parceiros
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Somos uma empresa que busca uma melhor ligação entre nossos
            parceiros, de forma que a prestação de nosso serviço atenda o máximo
            de expectativas aguardado por todos, nas necessidade logicas de
            nossos clientes, uma vez atendida sentimos a satisfação de que
            estamos no caminho certo do desenvolvimento e do ideal de nossos
            usuários, criando caminhos favoráveis e práticos sem muita
            burocracia.
          </m.p>
        </div>
      </>
      <>
      <div className="TelaMain2">
      <div className="Tela2">
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
              whileInView={{
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
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="Titulo2"
          >
            {" "}
            Nossas Redes Sociais!{" "}
          </motion.span>

          <div className="subCaixa1">
            <motion.button
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="botaoinst"
            >
              <FaInstagram />
              Instagram
            </motion.button>
            <motion.button
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="botaoface"
            >
              <FaFacebook />
              Facebook
            </motion.button>
            <motion.button
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="botaowpp"
            >
              <FaWhatsapp />
              WhatsApp
            </motion.button>
          </div>

          <div className="MapsBox">

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

        <div class="area2">
          <ul class="circles2">
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

    </div>
      </>
    </div>
  );
};

export default Home;
