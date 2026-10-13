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
    name: 'Project 8',
    image: '/IKEA.jpg',
    url: 'https://example.cohttps://elenaholmberg.github.io/IKEA-escaperoom/m',
  },
  {
    id: 9,
    name: 'Project 9',
    image: '/Juniper.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics/',
  },
  {
    id: 10,
    name: 'Project 10',
    image: '/calippo.jpg',
    url: 'https://example.com',
  },
  {
    id: 4,
    name: 'Project 4',
    image: '/zara.jpg',
    url: 'https://example.comhttps://www.figma.com/design/KFIQf0mL3rUkseyearcPuu/TEAM-The-A-B-Testers?node-id=54620-75&p=f&t=m7IsLgye82wqSbnN-0',
    layoutClass: 'projectCardRow2',
  },
  {
    id: 5,
    name: 'Project 5',
    image: '/svg.jpg',
    url: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-elenaholmberg/',
  },
  {
    id: 7,
    name: 'Project 7',
    image: '/CINK_003.jpg',
    url: 'https://example.com',
  },
];
