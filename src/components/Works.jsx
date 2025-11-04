import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  edecision,
}) => {
   return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          
          { edecision ? (
              <p className='mt-2 text-secondary text-[14px]'> Un api Rest conçu pour aider une communauté de développeurs autonomes dans leurs modalités de prise de décision pour leurs projets en commun, E-decision est un projet complet qui a étè conçu en équipe en utilisant les technologies spring boot, spring security , et tant d'autres. Vous pouvez visualisez la documentation complète du projet aux liens: <br/> <span className='blue-text-gradient font-extrabold cursor-pointer' onClick={() => window.open(source_code_link, "_blank")}>REX</span> , <br/> <span className=' blue-text-gradient  font-extrabold cursor-pointer' onClick={() => window.open("https://igscampus-my.sharepoint.com/:w:/g/personal/yassine_lguirati_campus-igs-toulouse_fr/Ef1b6IxjPA5NgJCTlz_SMMABRTL0TY8-UF0qliPnDvEhpw?e=3UsJDG", "_blank")}>Rapport d'analyse et conception</span> </p>
            ) : (
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            )
          }
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText}`}>Mes projets</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Cette section illustre mes compétences et mon expérience à travers des exemples concrets de mon travail.
          Chaque projet est brièvement décrit et accompagné de liens vers les dépôts de code et les démonstrations en direct.
          Cette sélection reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies, 
          et à gérer des projets de manière efficace
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");