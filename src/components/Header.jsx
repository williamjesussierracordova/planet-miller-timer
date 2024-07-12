import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <header className="header">
      <h1>Miller Planet</h1>
      <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </header>
  );
};

export default Header;