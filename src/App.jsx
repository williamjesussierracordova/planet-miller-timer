import  { useState, useEffect } from 'react';
import Header from './components/Header';
import MillerClock from './components/MillerClock';
import EarthClock from './components/EarthClock';
import MusicButton from './components/MusicButton';
import './App.css';
import Footer from './components/Footer';
import './i18';
import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  return (
    <div className="app-container">
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main className="content">
        <h2>{t('timer:tittle')} ({t('timer:dateRelease')})</h2>
        <div className="clock-container">
          {isDarkTheme ? (
            <>
              <h3>{t('timer:subtittleEarth')}</h3>
              <EarthClock />
            </>
          ) : (
            <>
              <h3>{t('timer:subtittleMiller')}</h3>
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