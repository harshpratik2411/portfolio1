"use client";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Hii",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Namaste",
  "こんにちは",
  "नमस्ते",
];

export default function GreetingSplash() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => setIndex((i) => (i + 1) % greetings.length), 350);
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => {
      clearInterval(rotate);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="text-5xl md:text-7xl font-bold tracking-tight animate-[fadeUp_0.6s_ease-out]">
        {greetings[index]}
      </div>
    </div>
  );
}