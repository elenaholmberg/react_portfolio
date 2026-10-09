export const translations = {
  sv: {
    title: 'Välkommen',
    description: 'Det här är min hemsida.',
    buttonLabel: 'Switch to English',
  },
  en: {
    title: 'Welcome',
    description: 'This is my homepage.',
    buttonLabel: 'Byt till svenska',
  },
};

export type Language = keyof typeof translations; // 'sv' | 'en'
