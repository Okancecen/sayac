import React, { useState, useEffect } from 'react';
import './main.css';

const Timer = () => {
  const initialMinutes = 2;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            alert('2 dakika doldu!');
            setMinutes(initialMinutes);
            setSeconds(0);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }


  return (
    <div className="timer">
      <div className="display">
        <span>{String(minutes).padStart(2, '0')}:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <div className="controls">
        <button>Başlat</button>
        <button >Duraklat</button>
        <button >Sıfırla</button>
      </div>
    </div>
  );
};

export default Timer;
