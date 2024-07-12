import  { useState, useEffect } from 'react';

const MillerClock = () => {
  const [millerTime, setMillerTime] = useState({});

  useEffect(() => {
    const updateMillerTime = () => {
      const interstellarRelease = new Date('2014-11-06T00:00:00Z');
      const now = new Date();
      const earthTimeMs = now - interstellarRelease;
      const earthYears = earthTimeMs / (1000 * 60 * 60 * 24 * 365.25);
      const millerHours = earthYears / 7;

      const millerDays = Math.floor(millerHours / 24);
      const remainingHours = Math.floor(millerHours % 24);
      const remainingMinutes = Math.floor((millerHours * 60) % 60);
      const remainingSeconds = Math.floor((millerHours * 3600) % 60);
      const remainingMilliseconds = Math.floor((millerHours * 3600000) % 1000);

      setMillerTime({ millerDays, remainingHours, remainingMinutes, remainingSeconds, remainingMilliseconds });
    };

    updateMillerTime();
    const interval = setInterval(updateMillerTime, 50); // Actualizar cada 50ms para mostrar milisegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="miller-time" className="time-display">
      <div className="time-unit"><span className="time-value">{millerTime.millerDays}</span> <span className="time-label">días</span></div>
      <div className="time-unit"><span className="time-value">{millerTime.remainingHours}</span> <span className="time-label">horas</span></div>
      <div className="time-unit"><span className="time-value">{millerTime.remainingMinutes}</span> <span className="time-label">minutos</span></div>
      <div className="time-unit">
        <span className="time-value">
          {millerTime.remainingSeconds}.{millerTime.remainingMilliseconds?.toString().padStart(3, '0')}
        </span> 
        <span className="time-label">segundos</span>
      </div>
    </div>
  );
};

export default MillerClock;