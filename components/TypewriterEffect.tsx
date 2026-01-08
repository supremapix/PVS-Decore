import React, { useState, useEffect } from 'react';

const words = ["Seu Lar.", "Sua Empresa.", "Sua Vida.", "Seu Escritório."];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400 inline-block min-w-[5ch]">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default TypewriterEffect;