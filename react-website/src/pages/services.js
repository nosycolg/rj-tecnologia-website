import React from "react";
import { motion as m } from "framer-motion";

const Services = () => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main>
        <div className="my-40 p-1">
          <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
            RJ Tecnologias
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Empresa</h2>
            <h2>Fibra Ótica</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>Melhor fibra ótica da região.</h3>
            <h3>Melhor conexão e velocidade entre as concorrências</h3>
          </div>
        </div>
      </main>
    </m.div>
  );
};

export default Services;
