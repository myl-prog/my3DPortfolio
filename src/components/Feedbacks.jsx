import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { fiverrProfile } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Les avis de mes anciens clients</p>
          <h2 className={styles.sectionHeadText}>Témoignages</h2>
          <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
          Quelques avis des clients avec lesquels j'ai pu travailler dans ma période en Freelance. Vous pouver visualisez plus d'avis  <a href="https://www.fiverr.com/yassierose?up_rollout=true" target="_blank" rel="noopener noreferrer"><span  className="text-[#915EFF] font-bold ">Ici</span></a>
      </motion.p>
        </motion.div>
      </div>
      <div className={`-mt[-20px] pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <div onClick={() => window.open("https://www.fiverr.com/yassierose?public_mode=true", "_blank")} className='flex gap-7 justify-center items-center'>
        <motion.div variants={fadeIn("up", "spring", 7 * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
          >
            <div className='relative w-full'>
              <img
                src={fiverrProfile}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />

              
            </div>

            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>Profile Freelance</h3>
              
            </div>
            

            
          </Tilt>
        </motion.div>
        
      </div>
      <br />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");