import { createContext, useState } from "react";

import es from '../lang/es.json';
import en from '../lang/en.json';

const LanguageContext = createContext();

const initialLanguage = 'es';
const translations = {
    es, en
};

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = ({ target }) => {
        if (target.value === 'es') {
            setLanguage('es');
            setTexts(translations.es);
        } else {
            setLanguage('en');
            setTexts(translations.en);
        }
    };

    const data = { language, texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageProvider };
export default LanguageContext;