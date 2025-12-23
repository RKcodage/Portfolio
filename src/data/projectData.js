import moviesBank from "../assets/img-projects/mb.png";
import morpionGame from "../assets/img-projects/morpion-game.png";
import brainwave from "../assets/img-projects/brainwave.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import maGestionImmo from "../assets/img-projects/ma-gestion-immo.png";

export const proyectos = [
  {
    titulo: "Ma Gestion Immo",
    descripcion:
      "E-commerce full stack desarrollado con React, Node.js y MongoDB. Incluye autenticación, carrito de compras, búsqueda, categorías, reseñas, etc.",
    imagen: maGestionImmo.src,
    tecnologias: [
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Cron",
      "Nodemailer",
    ],
    demo: "https://ma-gestion-immo.netlify.app/",
    codigo: "https://github.com/RKcodage/Ma-Gestion-Immo",
    categoria: "fullstack",
  },
  {
    titulo: "Movies Bank",
    descripcion:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    imagen: moviesBank.src,
    tecnologias: [
      "React",
      "JavaScript",
      "Sass",
      "MongoDB",
      "Node.js",
      "Express",
      "TMDB Api",
    ],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "Morpion Game",
    descripcion:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorias y pasarela de pago desarrollado en React.",
    imagen: morpionGame.src,
    tecnologias: [
      "React",
      "TypeScript",
      "Vite.js",
      "Node.js",
      "Express",
      "Web Socket",
    ],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },
  {
    titulo: "Brainwave",
    descripcion:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    imagen: brainwave.src,
    tecnologias: ["JavaScript", "React", "Tailwind"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: "frontend",
  },
  {
    titulo: "Traker Ingresos-Gastos",
    descripcion:
      "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
    imagen:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    tecnologias: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    categoria: "frontend",
  },
  {
    titulo: "App-clima",
    descripcion:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    imagen:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/app-clima",
    categoria: "frontend",
  },
  {
    titulo: "Legal Staff",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Medicare",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "API REST para Ecommerce",
    descripcion:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    categoria: "backend",
  },
  {
    titulo: "100 days coding in Js",
    descripcion: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Verbenas Paisajes",
    descripcion:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },
  {
    titulo: "API REST",
    descripcion:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
];
