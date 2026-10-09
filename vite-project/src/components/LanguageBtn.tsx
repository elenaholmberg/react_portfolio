// LanguageBtn.tsx
import type { Language } from './Translate';

type LanguageBtnProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageBtn = ({ language, setLanguage }: LanguageBtnProps) => {
  const nextLanguage: Language = language === 'sv' ? 'en' : 'sv';

  return (
    <button
      className="languageBtn"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === 'sv' ? 'Byt till engelska' : 'Switch to Swedish'}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
};

export default LanguageBtn;
