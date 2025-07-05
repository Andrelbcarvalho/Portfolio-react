import React, { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setDone(false);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index, text, speed]);

  useEffect(() => {
    if (done) {
      const blinkInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [done]);

  return (
    <h1
      style={{
        fontSize: "2.5rem",
        color: "#39ff14",
        textShadow: "0 0 10px #39ff14",
        marginBottom: "15px",
        whiteSpace: "pre",
        fontFamily: "monospace",
        minWidth: `${text.length + 1}ch`,
        display: "inline-block",
        transition: "opacity 0.3s ease",
        opacity: blink || !done ? 1 : 0, // aqui é a mágica: pisca sem tirar do layout
      }}
    >
      {displayedText}
    </h1>
  );
}
