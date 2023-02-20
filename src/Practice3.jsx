import React from "react";
import { useState } from "react";

export default function Practice3() {
  const [time, setTime] = useState(0);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  });
  return (
    <div>
      <h2>{time}.</h2>
    </div>
  );
}
