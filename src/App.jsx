import  { useState, useEffect } from 'react';
import Header from './components/Header';
import MillerClock from './components/MillerClock';
import EarthClock from './components/EarthClock';
import MusicButton from './components/MusicButton';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  return (
    <div className="app-container">
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main className="content">
        <h2>Tiempo desde el estreno de Interstellar (6 de noviembre de 2014)</h2>
        <div className="clock-container">
          {isDarkTheme ? (
            <>
              <h3>Tiempo en la Tierra</h3>
              <EarthClock />
            </>
          ) : (
            <>
              <h3>Tiempo en el Planeta Miller</h3>
              <MillerClock />
            </>
          )}
        </div>
      </main>
      <MusicButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Footer />
    </div>
  );
}

export default App;