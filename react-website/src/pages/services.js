import React from "react";
import { motion as m } from "framer-motion";
import Card from "../components/Card/card";
import "./services.css";

const Services = () => {
  return (
    <>
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
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Assine um de nossos planos e navegue em ultra velocidade.
        </m.h3>
      </div>
      <m.div
        className="cards"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 100, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Card
          title="Serviços"
          imageUrl="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/50.png"
          body="plano"
        />
        <Card
          title="Serviços"
          imageUrl="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/100.png"
          body="plano"
        />
        <Card
          title="Serviços"
          imageUrl="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/200.png"
          body="plano"
        />
        <Card
          title="Serviços"
          imageUrl="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/300.png"
          body="plano"
        />
        <Card
          title="Serviços"
          imageUrl="https://rjtecnologia-pe.com.br/wp-content/uploads/2023/01/500.png"
          body="plano"
        />
      </m.div>
    </>
  );
};

export default Services;
