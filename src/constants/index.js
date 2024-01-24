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
    CHATSPHERE,
    CURRENCY,
    PASSWORD,
    TODO,
    THEME
  } from "../../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "git-hub",
      title: "Git-Hub",
    },
    {
      id: "linkdein",
      title: "Linkdein",
    },
    {
      id:"resume" ,
      title:"Resume"
    }
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Problem Solving And DSA ",
      icon: backend,
    }
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
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "ChatSphere",
      description:
        "A Chat App Using React , Redux ToolKit And Appwrite As A Back End Service Where Multiple User Can Log In And Post Their Contents Also They Can Edit , Delete , Remove And Update The Respective Posts",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "AppWrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
      ],
      image: CHATSPHERE,
      source_code_link: "https://github.com/",
    },
    {
      name: "TODO LIST ",
      description:
        "A TODO List React App Where A User Can Create , Read , Delete , UPdate The TODO's Also The TODO's Are Saved On The Local Storage",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "context-api",
          color: "pink-text-gradient",
        },
      ],
      image: TODO,
      source_code_link: "https://github.com/",
    },
    {
      name: "Theme Changer",
      description:
        "A Basic React App Showing THe Chnage In The Dark And Light Theme Of A Website ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Context-api",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-Css",
          color: "pink-text-gradient",
        },
      ],
      image: THEME,
      source_code_link: "https://github.com/",
    },
    {
      name: "Random Password Generator",
      description:
        "A Basic React App Which Helps To Generate The Random PassWord Using Context Api , React Router Dom , And Hooks ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Context-api",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-Css",
          color: "pink-text-gradient",
        },
      ],
      image: PASSWORD,
      source_code_link: "https://github.com/",
    },
    {
      name: "Real Time Currency Convertor",
      description:
        "A React A Which Convers Between Different Currency And Handles The DAta Using The API Calls And Context API , USESTATE , USEEFFECT , USECALLBACK",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Context-api",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-Css",
          color: "pink-text-gradient",
        },
        {
          name: "Memoiasation",
          color: "blue-text-gradient",
        },
      ],
      image: CURRENCY,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };