import React, { Fragment, useEffect, useState } from 'react';
import './style.css';

const Clock = ({ duration }) => {
  const [time, setTime] = useState(10 * 24 * 60 * 60 * 1000);
  let interval;
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_second = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(total_second % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
  };
  if (getFormattedTime < 0) {
    clearInterval(interval.current);
  }
  return (
    <>
      <h1>{getFormattedTime(time)}</h1>
    </>
  );
};

export default Clock;
