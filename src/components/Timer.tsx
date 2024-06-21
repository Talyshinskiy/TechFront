import React, {useState, useRef, useEffect} from 'react';
import "./Timer.scss"
const SimpleTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setTimeout(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Время: {seconds} секунд</h1>
        <div>
          <button onClick={handleStart} disabled={isActive}>Старт</button>
          <button onClick={handlePause} disabled={!isActive}>Пауза</button>
          <button onClick={handleReset}>Сброс</button>
        </div>
      </div>
  );
};

export default SimpleTimer;
