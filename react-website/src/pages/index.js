import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image1 from "../images/300mega.png";
import image2 from "../images/400mega.png";
import "./indexStyle.scss";
import { motion as m } from "framer-motion";

const images = [image1, image2];

const Home = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="Site">
      <m.div
        className="View"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div
          ref={carousel}
          className="carousel"
          whileTap={{ cursos: "grabbing" }}
        >
          <div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <div className="item" key={image}>
                <img src={image} alt="Texto alt" />
              </div>
            ))}
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Home;
