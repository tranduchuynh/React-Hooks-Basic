import React from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();
  return (
    <div>
      <p style={{ fontSize: 42 }}>{timeString}</p>
    </div>
  );
}

export default Clock;
