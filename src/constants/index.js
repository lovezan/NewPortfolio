export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "LiveChat Web Application ",
    desc: "LiveChat is a cutting-edge web application that revolutionizes real-time communication. It empowers users to connect instantly through seamless chat interfaces, enhancing customer engagement and support.",
    subdesc:
      "Built using React.js, Tailwind CSS, and TypeScript, LiveChat integrates Firebase for user authentication and real-time database functionality. This ensures high performance and scalability while providing an intuitive user experience with features like real-time messaging, notifications, and user authentication.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/livechat-demo.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/Firebase.png",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },

  
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Nike Clone Web Application",
    desc: "Nike Clone is a feature-rich eCommerce web application that replicates the shopping experience of the official Nike website. It offers users the ability to browse a wide range of athletic footwear and apparel, complete with detailed product descriptions, reviews, and a seamless checkout process.",
    subdesc:
      "Built using React.js and Tailwind CSS, this application features a responsive design that ensures an optimal experience across all devices. Users can enjoy functionalities such as product filtering, user reviews, and a shopping cart that enhances overall engagement.",
    href: "https://tnikestorebytalib.netlify.app/",
    texture: "/textures/project/NikeStore.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

// export const workExperiences = [
//   {
//     id: 1,
//     name: "Framer",
//     pos: "Lead Web Developer",
//     duration: "2022 - Present",
//     title:
//       "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
//     icon: "/assets/framer.svg",
//     animation: "victory",
//   },
//   {
//     id: 2,
//     name: "Figma",
//     pos: "Web Developer",
//     duration: "2020 - 2022",
//     title:
//       "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
//     icon: "/assets/figma.svg",
//     animation: "clapping",
//   },
//   {
//     id: 3,
//     name: "Notion",
//     pos: "Junior Web Developer",
//     duration: "2019 - 2020",
//     title:
//       "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//     icon: "/assets/notion.svg",
//     animation: "salute",
//   },
// ];

export const workExperiences = [
  {
    id: 1,
    name: "Blurstock",
    pos: "Software Development Intern",
    duration: "Ongoing | Remote",
    title:
      "Currently working as a Software Development Engineer Intern. Tech stack: JavaScript, React, Node.js.",
    icon: "/assets/BlueStock.jpg", // Update icon path accordingly
    animation: "victory", // Update animation type if necessary
  },
  {
    id: 2,
    name: "TDS Avenue CodeForge",
    pos: "Frontend Developer",
    duration: "Aug 2024 - Sep 2024 | Remote",
    title:
      "Worked on calculator implementation design, online learning platform, and blogging pages. Tech stack: HTML, CSS, JavaScript, React.",
    icon: "/assets/TDS.jpg", // Update icon path accordingly
    animation: "clapping", // Update animation type if necessary
  },
  {
    id: 3,
    name: "Brainwave Matrix Solutions",
    pos: "Full Stack Developer",
    duration: "Sep 2024 - Oct 2024 | Remote",
    title:
      "Responsible for creating various tasks across the platform. Tech stack: HTML, CSS, JavaScript, Node.js, React.",
    icon: "/assets/Brainwave.jpg", // Update icon path accordingly
    animation: "salute", // Update animation type if necessary
  },
  {
    id: 4,
    name: "App Team NITH",
    pos: "Frontend Developer Intern",
    duration: "Sep 2022 - Present | Hamirpur, HP",
    title:
      "Developed a user-friendly frontend for the Hillfair app using Flutter, ensuring high usability and performance. Implemented custom UI components and optimized the application for smooth navigation and responsiveness.",
    icon: "/assets/NithApp.jpg", // Update icon path accordingly
    animation: "clapping", // Update animation type if necessary
  },
  {
    id: 5,
    name: "IAOL",
    pos: "Educational Advisor",
    duration: "Mar 2021 - Present | Kargil, Ladakh",
    title:
      "Provided guidance and support to IIT, NIT, and NEET aspirants across Ladakh through tailored mentorship programs and resources. Assisted students in making informed decisions about their academic and career paths, and organized educational events to foster their development and motivation.",
    icon: "/assets/iaol.png", // Update icon path accordingly
    animation: "victory", // Update animation type if necessary
  },
  {
    id: 6,
    name: "Suvidha Foundation",
    pos: "Frontend Developer Intern",
    duration: "Jun 2024 - Jul 2024 | Remote",
    title:
      "Designed and developed a user-friendly educational website using React, enhancing the overall user experience. Created custom frontend components and integrated backend functionalities to provide seamless navigation and interactive learning resources.",
    icon: "/assets/suvisha.jpg", // Update icon path accordingly
    animation: "salute", // Update animation type if necessary
  },
  {
    id: 7,
    name: "CICN",
    pos: "Frontend Developer",
    duration: "Jul 2024 - Apr 2025 | Under College Professor",
    title:
      "Worked on building the IEEE conference website as an intern under college supervision. Tech stack: React, CSS, JavaScript.",
    icon: "/assets/cicn.png", // Update icon path accordingly
    animation: "clapping", // Update animation type if necessary
  },
];
