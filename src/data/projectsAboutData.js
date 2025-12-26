import moviesBank from "../assets/img-projects/mb.png";
import brainwave from "../assets/img-projects/brainwave.png";
import reggenerate from "../assets/img-projects/reggenerate.png";
import maGestionImmo from "../assets/img-projects/ma-gestion-immo.png";

export const projects = [
  {
    title: "Ma Gestion Immo",
    image: maGestionImmo.src,
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Web Socket",
      "Cron",
      "Rate limiters",
    ],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
  },
  {
    title: "Movies Bank",
    description: "Short description of project 1.",
    image: moviesBank.src,
    technologies: ["React", "Sass", "MongoDB", "Express", "TMDB Api"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
  },
  {
    title: "Reggenerate",
    image: reggenerate.src,
    technologies: ["React", "Next.js", "Airtable"],
    demo: "https://reggenerate.circulegg.fr/",
    code: "https://github.com/yacinekabegg/reggenerate-next",
  },
  {
    title: "Brainwave",
    image: brainwave.src,
    technologies: ["React", "Tailwind"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Front-react-todo",
  },
];
