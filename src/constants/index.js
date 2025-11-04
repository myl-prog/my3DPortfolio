import {
    next,
    php,
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
    khresterion,
    fiverr,
    springboot,
    python,
    mysql,
    jenkins,
    azureDevops,
    edecision,
    mern,
    portfolio,
    rayanehrt,
    usa,
    france,
    jrmyprouff,
    sqwrtz,
    fiverrProfile,
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
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "Nextjs",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySql",
      icon: mysql,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Spring boot",
      icon: springboot,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "GIT",
      icon: git,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Azure Devops",
      icon: azureDevops,
    },
  ];
  
  const experiences = [
    {
      title: "Ingénieur Full Stack",
      company_name: "Digital House GROUP",
      icon: digitalHouse,
      iconBg: "white",
      date: "Avril 2021 - Aout 2021",
      points: [
        "Développement et géstion d'une application de transfert de données entre deux Systèmes d'informations . (BIM et PLM)",
        "Insertion des API Rest et développement entier de l'application.",
        "Technologies: Back-end : Java (Spring boot) - MySQL. Front-end : JavaScript (Angular) ",
      ],
      bigger:true,
    },
    {
      title: "Ingénieur Full Stack",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "Fév 2022 - Septembre 2023",
      points: [
        "Développement et maintenance de plusieurs entités d'une application PLM Windchill customisé consistant principalemant à: ",
        "Traiter les bugs reportés par le client.",
        "Ajouter de nouvelles fonctionnalités demandés par le client.",
        "Chef de projet de l'integration de nouveaux outils CI/CD dans un contexte Devops (SonarQube,Jenkins).",
        "Technologies: Back-end: JAVA(JEE, Spring), SQL, gestion API rest. Front-end: HTML/CSS et Javascript. DevOps : SonarQube, Jenkins, Gitlab CI/CD.",
      ],
      bigger:false,
    },
    {
      title: "Ingénieur Full Stack",
      company_name: "Khresterion",
      icon: khresterion,
      iconBg: "white",
      date: "Septembre 2023 - Decembre 2024",
      points: [
        "Développement et Maintenance d'une gamme d’applications utilisant de l’IA symbolique afin de répondre aux besoins spécifiques de nos clients.",
        "Responsabilités Tech Lead : Conception de l’infrastructure d’une application, conception du design system, Pipeline CI/CD (JenkinsSonarQube)",
        "Technologies: Back-end: JAVA(Spring boot), MongoDB. Front-end: Vuejs",
      ],
      bigger:false,
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Un travail très rapide, efficace, rien a dire ! Je recommande a 100%.",
      name: "sqwrtz",
      designation: "Product Manager",
      company: "",
      image: sqwrtz,
    },
    {
      testimonial:
        "Le développeur a prendre sur fiverr !",
      name: "Rayane hrt",
      designation: "CEO",
      company: "TrackmyBike",
      image: rayanehrt,
    },
    {
      testimonial:
        "Super travail de Yassierose. Hyper réactif et professionnel.",
      name: "Jeremy",
      designation: "Client particulier",
      company: "",
      image: jrmyprouff,
    },
  ];
  
  const projects = [
    {
      name: "Appli réseaux sociaux",
      description:
        "Une application réseaux sociaux inspiré par Twitter ou threads, robuste avec un Full Stack MERN en utilisant du Nextjs pour plus d'optimisation du seo, du chargement et du routage.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "MERN",
          color: "pink-text-gradient",
        },
      ],
      image: mern,
      source_code_link: "https://github.com/myl-prog/Thread-clone",
    },
    {
      name: "E-decision - SPRING API",
      description:
        "Test2",
      edecision:true,
      tags: [
        {
          name: "SpringSecurity",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: edecision,
      source_code_link: "https://github.com/myl-prog/E-decision",
    },
    {
      name: "3D Portfolio",
      description:
        "C'est bien le site dans lequel vous êtes actuellement, il a étè conçu avec React, mais aussi Threejs pour donner vie a certaines composantes en 3D.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/myl-prog/my3DPortfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };