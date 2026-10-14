export type Project = {
  id: number;
  name: string;
  image: string;
  url: string;
  layoutClass?: string;
};

export const projects: Project[] = [
  {
    id: 8,
    name: 'IKEA Escaperoom',
    image: '/IKEA.jpg',
    url: 'https://example.cohttps://elenaholmberg.github.io/IKEA-escaperoom/m',
  },
  {
    id: 9,
    name: 'Juniper',
    image: '/Juniper.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics/',
  },
  {
    id: 10,
    name: 'Calippo Shots',
    image: '/calippo.jpg',
    url: 'https://example.com',
  },
  {
    id: 4,
    name: 'Zara ',
    image: '/zara.jpg',
    url: 'https://example.comhttps://www.figma.com/design/KFIQf0mL3rUkseyearcPuu/TEAM-The-A-B-Testers?node-id=54620-75&p=f&t=m7IsLgye82wqSbnN-0',
    layoutClass: 'projectCardRow2',
  },
  {
    id: 5,
    name: 'SVG Project',
    image: '/svg.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-elenaholmberg/',
  },
  {
    id: 7,
    name: 'Cink Project',
    image: '/CINK_003.jpg',
    url: 'https://example.com',
  },
];
