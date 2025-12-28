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
      "Google Auth",
    ],
    demo: "https://ma-gestion-immo.netlify.app/",
    code: "https://github.com/RKcodage/Ma-Gestion-Immo",
  },
  {
    title: "Reggenerate",
    image: reggenerate.src,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Airtable"],
    demo: "https://reggenerate.circulegg.fr/",
    code: "https://github.com/yacinekabegg/reggenerate-next",
  },
  {
    title: "Movies Bank",
    description: "Short description of project 1.",
    image: moviesBank.src,
    technologies: ["React", "Sass", "MongoDB", "Express", "TMDB Api"],
    demo: "https://your-movies-bank-app.netlify.app/",
    code: "https://github.com/RKcodage/Movies-bank-front",
  },
  {
    title: "Brainwave",
    image: brainwave.src,
    technologies: ["React", "JavaScript", "Tailwind"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/RKcodage/BrainAI",
  },
];
