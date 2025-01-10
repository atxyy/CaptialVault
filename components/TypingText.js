import React, { useState, useEffect } from "react";

const TypingText = ({
  texts = [
    "Welcome to Capital Vault",
    "Revolutionary PAMM Account Management",
    "Work with Regulated Brokers",
    "Empower Your Wealth",
    "AI-Powered Algorithms",
    "Who Said Forex Trading Isn't Easy?",
  ],
  speed = 100,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // Backspacing
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      // Pause before switching between typing and backspacing
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);

        // If finished deleting, move to the next text
        if (!isDeleting) {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, textIndex, speed]);

  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${className}`}
    >
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingText;
