import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    fullStack,
    windchill,
    digitalHouse,
    capgemini,
    fiverr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos de moi",
    },
    {
      id: "work",
      title: "Expériences",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur web",
      icon: web,
      bigger:false,
    },
    {
      title: "Développeur java",
      icon: java,
      bigger:false,
    },
    {
      title: "Développeur Reactjs",
      icon: reactjs,
      bigger:false,
    },
    {
      title: "Développeur Full-Stack",
      icon: fullStack,
      bigger:false,
    },
    
    {
      title: "Développeur PLM",
      icon: windchill,
      bigger:true,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Développeur Full Stack",
      company_name: "Digital House GROUP",
      icon: digitalHouse,
      iconBg: "#383E56",
      date: "Avril 2021 - Aout 2021",
      points: [
        "Développement et géstion d'une application de transfert de données entre deux Systèmes d'informations . (BIM et PLM)",
        "Insertion des API Rest et développement entier de l'application.",
        "Technologies: Back-end : Java (Spring boot) - MySQL. Front-end : JavaScript (Angular) ",
      ],
    },
    {
      title: "Développeur Full Stack",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Fév 2022",
      points: [
        "Développement et maintenance de plusieurs entités d'une application PLM Windchill customisé consistant principalemant à: ",
        "Traiter les bugs reportés par le client.",
        "Ajouter de nouvelles fonctionnalités demandés par le client.",
        "Chef de projet de l'integration de nouveaux outils CI/CD dans un contexte Devops (SonarQube,Jenkins).",
        "Technologies: Back-end: JAVA(JEE, Spring), SQL, gestion API rest. Front-end: HTML/CSS et Javascript. DevOps : SonarQube, Jenkins, Gitlab CI/CD.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };