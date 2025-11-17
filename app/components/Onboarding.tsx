'use client';

import { useState, useEffect } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Portfolio';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // After typing is complete, wait to ensure total 3 seconds
        // Typing takes ~900ms (9 chars * 100ms), so wait ~2100ms more
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            onComplete();
          }, 300);
        }, 1800);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  // Blink cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="onboarding-container">
      <div className="onboarding-text">
        {displayText.trim()}
        {showCursor && <span className="typewriter-cursor">|</span>}
      </div>
    </div>
  );
}

