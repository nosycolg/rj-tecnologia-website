import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import image1 from '../images/300mega.png'
import image2 from '../images/400mega.png'
import './indexStyle.scss'

const images = [image1, image2]


const Home = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(()=>{

    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

  }, [])

  return (
    <div className='View'>
    <motion.div ref={carousel} className='carousel' whileTap={{ cursos: "grabbing"}}>
      <motion.div className='inner-carousel'
      
      drag="x"
      dragConstraints={{right:0, left: -width}}
      
      >

        {images.map(image =>(
          <motion.div className="item" key={image}>
            <img src={image} alt="Texto alt"/>
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
    </div>

  );
};



export default Home