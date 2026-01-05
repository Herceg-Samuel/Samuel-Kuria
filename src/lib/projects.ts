import Image from "next/image";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "blog",
    title: "Blog",
    description:
      "A quiet corner of the internet where I finally show up.For years, my writing lived in scattered notes and whispered drafts. Now it’s here — a home for my dev journey, maybe a sprinkle of psychology too (we'll see 😅).",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://the-identified-blog.vercel.app/",
  },
  {
    id: "project-2",
    slug: "vuejs-task-app",
    title: "Vuejs Task App",
    description:
      "A simple task app built using a new technology. I built it using Vuejs. It allows you to perform add and delete tasks. You can also mark task as done. It is a simple and easy to use task app.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["Vuejs", "Pico CSS"],
    liveLink: "https://vuejstaskapp.netlify.app/",
  },
  {
    id: "project-3",
    slug: "better-calc",
    title: "Better Calc",
    description:
      "It is a simple calculator that allows you to perform basic arithmetic operations like addition, subtraction, multiplication, and division. It also allows you to perform advanced operations like square root, exponentiation, and logarithm.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://bettercalc1.netlify.app/",
  },
  {
    id: "project-4",
    slug: "student-portal-figma-design",
    title: "Student portal Figma design",
    description:
      "Student portal Figma design for DeKUT University. This is a design we created for a student portal for DeKUT University. It includes features like course registration, results viewing, and more.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["Figma", "UI/UX Design"],
    liveLink:
      "https://www.figma.com/proto/NOKe8dLK1P5CWtdSIj7w0j/DeKUT-Student-Portal?page-id=0%3A1&node-id=1-2&p=f&viewport=-1747%2C-17%2C0.17&t=RCh2iGDUZoPuc7EG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
  {
    id: "project-5",
    slug: "my-portfolio-figma-design",
    title: "My Portfolio Figma design",
    description:
      "I created this design for my portfolio using Figma. It showcases my skills, projects, and experience in a clean and modern layout. You can view the design and interact with it in Figma. It includes sections for my bio, skills, projects, and contact information. ",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["Figma", "UI/UX Design"],
    liveLink:
      "https://www.figma.com/proto/w9iOtcsFFaIRQuLHO2ojzB/WEBSITE?page-id=0%3A1&node-id=15-4&p=f&viewport=65%2C479%2C0.21&t=ssyPMB9nrmSpOoCW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A4",
  },
  {
    id: "project-6",
    slug: "find-movies-app",
    title: "Find Movies App",
    description:
      "This is a movie search app. It allows users to search for movies, view details, and see ratings. It provides you with the latest on movies and series that you love. The app features a clean UI and responsive design. (I just love movies and series🍿)",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["React", "TailwindCSS", "API"],
    liveLink: "https://find-movies-omega.vercel.app/",
  },
  {
    id: "project-7",
    slug: "chef-delight",
    title: "Chef Delight",
    description:
      "A one stop recipe recommendation from the finest models. Never get stuck about what to cook. Give us your ingridients, get your meal.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["React", "TailwindCSS", "hugging face models"],
    liveLink: "https://chefdelight.vercel.app/",
  },
  {
    id: "project-8",
    slug: "african-math-heritage",
    title: "African Math Heritage",
    description:
      "A true African showcasing of our heritage. Inspired by the unit Africa's contribution to Film and Mathematics. This interactive experience explores the deep connection between mathematics and African culture. Discover how mathematical ideas are woven into our traditional games, art, and history.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "Javascript", "CSS"],
    liveLink: "https://africanmathematicalgenius.netlify.app/",
  },
  {
    id: "project-9",
    slug: "class-portfolio",
    title: "Class Portfolio",
    description:
      "This is a class project portfolio. Simple, mininalistic and fun.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "Javascript", "CSS"],
    liveLink: "https://portfoliohtml-iota.vercel.app/",
  },
  {
    id: "project-10",
    slug: "the-oracle",
    title: "The Oracle",
    description:
      "A text to speech application powered by the browser. Inspired by Wes Bos.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["React", "Javascript", "CSS"],
    liveLink: "https://the-oracle-pink.vercel.app/",
  },
  {
    id: "project-11",
    slug: "the-voices",
    title: "The Voices",
    description:
      "A text to speech web application powered by the browser. Inspired by Wes Bos.",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "Javascript", "CSS"],
    liveLink: "https://thevoices-nine.vercel.app/",
  },
];
