import React from 'react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";


const ThemeToggle = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <button className="theme-toggle" onClick={() => setIsDarkTheme(!isDarkTheme)} style={{outline:'none'}}>
      {isDarkTheme ? <CiLight/> : <CiDark/>}
    </button>
  );
};

export default ThemeToggle;