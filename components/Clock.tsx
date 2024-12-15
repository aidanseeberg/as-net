"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(Date.now());
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return mounted && <p>{new Date(time).toLocaleTimeString()}</p>;
}
