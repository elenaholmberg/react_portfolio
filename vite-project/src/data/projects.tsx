export type Project = {
  id: number;
  name: string;
  image: string;
  url: string;
  technologies: string[];
  layoutClass?: string;
};

export const projects: Project[] = [
  {
    id: 8,
    name: 'IKEA Escaperoom',
    image: '/IKEA.jpg',
    url: 'https://example.cohttps://elenaholmberg.github.io/IKEA-escaperoom/m',
    technologies: ['React', 'JavaScript'],
  },
  {
    id: 9,
    name: 'Juniper',
    image: '/Juniper.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics/',
    technologies: ['Figma', 'JavaScript'],
  },
  {
    id: 10,
    name: 'Calippo Shots',
    image: '/calippo.jpg',
    url: 'https://example.com',
    technologies: ['Canva', 'React'],
  },
  {
    id: 4,
    name: 'Zara ',
    image: '/zara.jpg',
    url: 'https://example.comhttps://www.figma.com/design/KFIQf0mL3rUkseyearcPuu/TEAM-The-A-B-Testers?node-id=54620-75&p=f&t=m7IsLgye82wqSbnN-0',
    technologies: ['Figma', 'TypeScript'],
    layoutClass: 'projectCardRow2',
  },
  {
    id: 5,
    name: 'SVG Project',
    image: '/svg.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-elenaholmberg/',
    technologies: ['React', 'TypeScript'],
  },
  {
    id: 7,
    name: 'Cink Project',
    image: '/CINK_003.jpg',
    url: 'https://example.com',
    technologies: ['Node.js', 'MySQL'],
  },
];
