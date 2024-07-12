import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer">
                <p>Desarrollado por <a href="https://william-sierra-cordova.netlify.app" target="_blank" rel="noreferrer">William</a></p>
            </footer>
            <div className="footer-links">
                <a href="https://github.com/williamjesussierracordova/planet-miller-timer" target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'2.5rem'}}/></a>
            </div>                
        </div>
    );
}

export default Footer;