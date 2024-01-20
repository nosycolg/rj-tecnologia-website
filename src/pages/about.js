import React from "react";
import "../scss/about.scss";
import { motion as m } from "framer-motion";
import Waves from "../images/wave.svg";

const About = () => {
  return (
    <>
      <div className="Site999">
        <div className="about">
          <div className="about1">
            <div className="aboutItem">
              <m.h1 className="QuemSomos"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Quem somos?
              </m.h1>
              <m.p
                className="textabout"
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

              <m.img className="ondas" src={Waves} alt="Ondas"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              />

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
                conforto e entretimento através de nossa tecnologia, de forma que o
                crescimento seja amplo em todas as necessidades e buscar pelo acesso
                do acervos infinito da internet, nosso marco é ter a satisfação do
                nosso publico direto e indireto e cumprir de forma verdadeiro o
                nosso chamado.
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
                de futebol, maratona, feiras, lives musical, lançamentos e novidade
                em muitos dos seguimento da sociedade, nossa marca esta presente
                como apoio, patrocinador e parceiro em pequenos médios e grandes
                eventos.
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
              Somos uma empresa que busca uma melhor ligação entre nossos parceiros,
              de forma que a prestação de nosso serviço atenda o máximo de
              expectativas aguardado por todos, nas necessidade logicas de nossos
              clientes, uma vez atendida sentimos a satisfação de que estamos no
              caminho certo do desenvolvimento e do ideal de nossos usuários,
              criando caminhos favoráveis e práticos sem muita burocracia.
            </m.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
