import { useState, useEffect } from 'react';

function calculateTimeLeft() {
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getFullYear(), 7, 28); 
  const timeDifference = targetDate - currentDate;

  if (timeDifference < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Обратный Отсчет До Дня Рождения Аиши!!!</h1>
      <div style={{ fontSize: '24px' }}>
        <p>Оставшееся время до 28 Августа:</p>
        <p>
          {timeLeft.days} Дней, {timeLeft.hours} Часов, {timeLeft.minutes} Минут, {timeLeft.seconds} Секунд
        </p>
      </div>
      <style jsx>{`
        h1 {
          font-size: 36px;
        }
        p {
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}
