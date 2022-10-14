import React from "react";

const Timers = ({months, days, hours, minutes, seconds}) => {
  return (
    <div id="countdown-num" className="text-white todo-rows T">
        <h1>{months}m {days}d {hours}h {minutes}m {seconds}s</h1>
    </div>
  );
};


export default Timers;