// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          "welcome": "Bienvenido",
          "changeLanguage": "Cambiar idioma"
        },
        header:{
            "planetaMiller": "Planeta Miller",
        },
        timer: {
            "tittle": "Tiempo desde el estreno de Interstellar",
            "dateRelease": "6 de Noviembre de 2014",
            "subtittleEarth": "Tiempo en la Tierra",
            "subtittleMiller": "Tiempo en el Planeta Miller",
            "years": "Años",
            "days": "Días",
            "hours": "Horas",
            "minutes": "Minutos",
            "seconds": "Segundos",
        },
        footer: {
            "desarrollado": "Desarrollado por",
            "github": "Github",
        }
      },
      en: {
        translation: {
          "welcome": "Welcome",
          "changeLanguage": "Change language"
        },
        header:{
            "planetaMiller": "Miller Planet",
        },
        timer: {
            "tittle": "Time since the release of Interstellar",
            "dateRelease": "6 November 2014",
            "subtittleEarth": "Time on Earth",
            "subtittleMiller": "Time on Miller Planet",
            "years": "Years",
            "days": "Days",
            "hours": "Hours",
            "minutes": "Minutes",
            "seconds": "Seconds",
        },
        footer: {
            "desarrollado": "Developed by",
            "github": "Github",
        }
      }
    },
    lng: "en", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;