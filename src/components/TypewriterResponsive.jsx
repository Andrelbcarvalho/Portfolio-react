import React, { useEffect, useState } from "react";

export default function TypewriterResponsive({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <p
      style={{
        fontSize: "clamp(1rem, 4vw, 1.3rem)", // fonte responsiva para mobile
        fontWeight: "bold",
        lineHeight: "1.4",
        maxWidth: "90vw",
        whiteSpace: "normal",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        margin: 0,
        textAlign: "center",
      }}
    >
      {displayedText}
      <span
        style={{
          borderRight: "2px solid #cdd9e5",
          marginLeft: "2px",
          animation: "blink 1s steps(2, start) infinite",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </p>
  );
}
