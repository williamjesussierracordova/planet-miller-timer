import  { useState, useEffect } from 'react';

const EarthClock = () => {
  const [earthTime, setEarthTime] = useState({});

  useEffect(() => {
    const updateEarthTime = () => {
      const interstellarRelease = new Date('2014-11-06T00:00:00Z');
      const now = new Date();
      const timeDiff = now - interstellarRelease;

      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const milliseconds = timeDiff % 1000;

      setEarthTime({ years, days, hours, minutes, seconds, milliseconds });
    };

    updateEarthTime();
    const interval = setInterval(updateEarthTime, 50); // Actualizar cada 50ms para mostrar milisegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="earth-time" className="time-display">
    <div className="time-unit">
      <span className="time-value">{earthTime.years}</span> 
      <span className="time-label"> años</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{earthTime.days}</span> 
      <span className="time-label"> días</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{earthTime.hours}</span> 
      <span className="time-label"> horas</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{earthTime.minutes}</span> 
      <span className="time-label"> minutos</span>
    </div>
    <div className="time-unit">
      <span className="time-value">
        {earthTime.seconds}.{earthTime.milliseconds?.toString().padStart(3, '0')}
      </span> 
      <span className="time-label"> segundos</span>
    </div>
  </div>
  );
};

export default EarthClock;