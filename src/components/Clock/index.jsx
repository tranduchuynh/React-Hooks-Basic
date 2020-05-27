import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

Clock.propTypes = {};
function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      console.log("clearn up clock");
      clearInterval(clock);
    };
  }, []);
  return (
    <div>
      <p style={{ fontSize: 42 }}>{timeString}</p>
    </div>
  );
}

export default Clock;
