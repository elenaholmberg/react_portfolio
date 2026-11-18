export type Project = {
  id: number;
  name: string;
  description?: string;
  checkout?: string;
  image: string;
  url: string;
  technologies: string[];
  layoutClass?: string;
};

export const projects: Project[] = [
  {
    id: 6,
    name: 'Mario Questlog',
    description:
      'A personal Mario game collection built with React, TypeScript and SCSS. Track your adventures, manage your backlog and keep all your Mushroom Kingdom memories in one place!',
    checkout: 'CHECK IT OUT ---->>',
    image: '/mario-framsida.png',
    url: 'https://games-vert-three.vercel.app/',
    technologies: ['React', 'TypeScript', 'Canva'],
  },
  {
    id: 8,
    name: 'IKEA Escaperoom',
    description:
      'A team-built digital escape room focused on intuitive user flows, accessibility, and engaging interactivity. (No resposive design implemented)',
    checkout: 'CHECK IT OUT ---->>',
    image: '/ikea-framsida-rundad.png',
    url: 'https://elenaholmberg.github.io/IKEA-escaperoom/',
    technologies: ['JavaScript'],
  },
  {
    id: 9,
    name: 'Juniper',
    description:
      'A school project where we were given another team’s Figma design and requirements specification and were responsible for building the responsive frontend solution.',
    checkout: 'CHECK IT OUT ---->>',
    image: '/juniper-framsida-rundad.png',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics/',
    technologies: ['Figma', 'JavaScript', 'Node.js'],
  },
  {
    id: 10,
    name: 'Calippo Shots',
    description:
      'A collaborative group project where we developed the visual identity and overall design concept, including the graphic profile and UI design, which was then handed over to another team to implement in code.',
    checkout: 'CHECK IT OUT ---->>',
    image: '/calippo-framsida-rundad.png',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-bleed-trim/',
    technologies: ['TypeScript', 'Figma', 'Node.js'],
  },
  {
    id: 4,
    name: 'Zara ',
    description:
      'A UX design project focused on practising the full user experience design process, from initial research and analysis to user flows, wireframing, and interactive prototyping in Figma.',
    checkout: 'CHECK IT OUT ---->>',
    image: '/zara-framsida-rundad.png',
    url: 'https://www.figma.com/design/KFIQf0mL3rUkseyearcPuu/TEAM-The-A-B-Testers?node-id=54620-75&p=f',
    technologies: ['Figma'],
    layoutClass: 'projectCardRow2',
  },
  {
    id: 5,
    name: 'SVG Project',
    description:
      'An SVG project exploring vector graphics, visual design, and graphic tools for creating scalable assets for the web.',
    checkout: 'CHECK IT OUT ---->>',
    image: '/svg-framsida-rundad.png',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-elenaholmberg/',
    technologies: ['JavaScript', 'Canva'],
  },
  {
    id: 7,
    name: 'Cink Project',
    description:
      'Built my own sustainable e-commerce brand working across product development, visual identity, e-commerce, and marketing. An experience that taught me valuable lessons in problem-solving, design, and understanding customer needs.',
    checkout: 'CHECK IT OUT ---->>',
    image: '/cink-framsida-rundad.png',
    url: 'https://www.instagram.com/cinkshop/',
    technologies: [],
  },
];
