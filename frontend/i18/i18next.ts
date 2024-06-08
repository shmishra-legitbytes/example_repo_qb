

import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';



import enTranslation from '../locales/en/translation.json';

import daTranslation from '../locales/da/translation.json';



i18n

    .use(initReactI18next)

    .init({

        resources: {

            en: { translation: enTranslation },

            da: { translation: daTranslation },

        },

        lng: 'da', // default language for server-side

        fallbackLng: 'en', // fallback language

        interpolation: {

            escapeValue: false, // React already escapes by default

        },

    });



export const setLanguage = (language: string) => {

    i18n.changeLanguage(language);

    if (typeof window !== 'undefined') {

        localStorage.setItem('lang', language);

    }

};



export default i18n;

