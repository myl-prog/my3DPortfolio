import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { fiverr } from "../assets";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const FreelanceExperienceCard = ({  }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date="2018-2020"
      iconStyle={{background : "#E6DEDD"}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={fiverr}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>Développeur logiciel</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          Fiverr
        </p>
      </div>
        <p className="margin">
          Conception d'applications sur mesures pour mes clients en utilisant une variété de technologies
          front-end et back-end selon leur besoins 
        </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        
          <li
            
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            Front-end: HTML/CSS, JavaScript, ReactJs, Angular, Bootstrap, Tailwindcss.
          </li>
          <li
            
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            Back-end: Java, Spring boot, MySQL, Python, MongoDB  
          </li>
          
        
      </ul>
    </VerticalTimelineElement>
  );
};
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Mon parcours
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Expériences.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Expériences Freelance
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
           
            <FreelanceExperienceCard/>
          
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");