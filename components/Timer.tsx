
import React, { useState, useEffect } from 'react';
import { ClockIcon } from './Icons';

interface TimerProps {
  initialSeconds: number;
}

export const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
  };
  
  const timeParts = formatTime().split(':');

  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 flex flex-col items-center">
        <div className="flex items-center gap-2 text-gray-400 mb-4">
            <ClockIcon className="h-6 w-6"/>
            <h4 className="text-lg font-medium tracking-wider uppercase">Time Remaining</h4>
        </div>
        <div className="flex items-center space-x-4">
            <div className="text-center">
                <p className="text-7xl font-bold text-red-500 tabular-nums">{timeParts[0]}</p>
                <p className="text-sm text-gray-500">HOURS</p>
            </div>
            <p className="text-7xl font-bold text-red-500 pb-8">:</p>
            <div className="text-center">
                <p className="text-7xl font-bold text-red-500 tabular-nums">{timeParts[1]}</p>
                <p className="text-sm text-gray-500">MINUTES</p>
            </div>
            <p className="text-7xl font-bold text-red-500 pb-8">:</p>
            <div className="text-center">
                <p className="text-7xl font-bold text-red-500 tabular-nums">{timeParts[2]}</p>
                <p className="text-sm text-gray-500">SECONDS</p>
            </div>
        </div>
    </div>
  );
};
