"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date(Date.now()).toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(Date.now()).toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });
  if (!window) return;
  return time && <p>{time}</p>;
}
