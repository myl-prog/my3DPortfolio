import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { prodev, prodevanime } from "../assets";
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
      <div className='flex flex-col lg:flex-row gap-10 items-start justify-between'>
        {/* Section texte à gauche */}
        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Je suis un développeur FullStack avec plus de 7 ans d'expérience, spécialisé en Java et JavaScript. Mon expertise s'étend à React, Next.js et Three.js en Front-end, ainsi qu'à Spring Boot et JEE en Back-end. J'ai conçu des interfaces utilisateur conviviales et des applications web complexes de zéro, en mettant en œuvre des solutions DevOps pour optimiser le processus de développement.

Mon parcours m'a permis de maîtriser les dernières tendances en développement et de collaborer sur des projets opérationnels de grande envergure.
<br/>
<br/>
Découvrez mes réalisations et expériences dans la suite de mon portfolio. Et n'hésitez pas à me contactez sur <a href="https://www.linkedin.com/in/yassine-lguirati-218692161/" target="_blank" rel="noopener noreferrer"><span  className="text-[#915EFF] font-bold ">LinkedIn</span></a> pour convenir d'un éventuel entretien !
          </motion.p>
        </div>

        {/* Photo à droite */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className='flex-shrink-0 lg:w-[400px] w-full'
        >
          <Tilt className='w-full'>
            <div className='relative w-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#FF6B9D] rounded-2xl blur-sm opacity-50'></div>
              <div className='relative bg-tertiary rounded-2xl p-1 shadow-card'>
                <img
                  src={prodevanime}
                  alt='Yassine Lguirati - Développeur FullStack'
                  className='w-full h-auto rounded-2xl object-cover'
                />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard bigger={service.bigger} key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About,"about");