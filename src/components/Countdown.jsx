import React, { useEffect, useState } from "react";
import '../styles/Countdown.css'

export default function Countdown({ targetDate, primaryColor, accentColor }) {
  const [timeLeft, setTimeLeft] = useState({});

 useEffect(() => {
  const timer = setInterval(() => {
    const total = Date.parse(targetDate) - Date.now();
    if (total <= 0) return clearInterval(timer);

    setTimeLeft({
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const totalCycle = 45 * 24 * 60 * 60 * 1000;
  const progress = timeLeft.total != null ? 1 - timeLeft.total / totalCycle : 0; // 45-day cycle

  return (
    <>
     <div className="countdown-widget">
        <div className="countdown-text">
            <div className="top"> {timeLeft.days}d</div>
         <div className="bottom">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</div>
      </div>
      <svg   width="200" height="200">
        <circle
          r={radius}
          cx="50%"
          cy="50%"
          stroke='var(--color-primary)'
          strokeWidth="8"
          fill="none"
        />
        <circle
          r={radius}
          cx="50%"
          cy="50%"
          stroke="var(--color-accent)"
          strokeWidth='8'
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
        />
      </svg>
    </div>
    </>
  );
}