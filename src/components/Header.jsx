import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';
import { Us } from "react-flags-select";
import { Es } from "react-flags-select";

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <h1>{t('header:planetaMiller')}</h1>
      <div className='headerButtons'>
        <a href='/' style={{color:'white'}}>{t('header:home')}</a>
        <a href='/About' style={{color:'white'}}>{t('header:about')}</a>
        <button onClick={toggleLanguage} className='buttonLanguage' style={{outline:'none'}}>
          {i18n.language === 'en' ? <Es/> : <Us/>}
        </button>
        <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </div>
    </header>
  );
};

export default Header;