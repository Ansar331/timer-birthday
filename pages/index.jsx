import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

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
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setShowConfetti(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      Сережа пидарас)
    </div>
  );
}
