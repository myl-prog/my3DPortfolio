import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, bigger }) => {
  
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-tertiary'
        >
          <img
            src={icon}
            alt='development'
            className={`object-contain ${
              bigger ? "w-22 h-22" : "w-16 h-16"
            }`}
          />
          

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un développeur FullStack avec plus de 4 ans d'expérience, spécialisé en Java et JavaScript. Mon expertise s'étend à React, Next.js et Three.js en Front-end, ainsi qu'à Spring Boot et JEE en Back-end. J'ai conçu des interfaces utilisateur conviviales et des applications web complexes de zéro, en mettant en œuvre des solutions DevOps pour optimiser le processus de développement.

Mon parcours m'a permis de maîtriser les dernières tendances en développement et de collaborer sur des projets opérationnels de grande envergure.
<br/>
<br/>
Découvrez mes réalisations et expériences dans la suite de mon portfolio. Et n'hésitez pas à me contactez sur <a href="https://www.linkedin.com/in/yassine-lguirati-218692161/" target="_blank" rel="noopener noreferrer"><span  className="text-[#915EFF] font-bold ">LinkedIn</span></a> pour convenir d'un éventuel entretien !
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard bigger={service.bigger} key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About,"about");