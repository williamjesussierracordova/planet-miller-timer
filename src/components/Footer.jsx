import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <footer className="footer">
                <p>{t('footer:desarrollado')} <a href="https://william-sierra-cordova.netlify.app" target="_blank" rel="noreferrer">William</a></p>
            </footer>
            <div className="footer-links">
                <a href="https://github.com/williamjesussierracordova/planet-miller-timer" target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'2.5rem'}}/></a>
            </div>                
        </div>
    );
}

export default Footer;