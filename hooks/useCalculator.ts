"use client";

import { useState, useEffect } from "react";
import { evaluate } from "@/lib/calculator/evaluateScientific";

export function useCalculator() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");
  const [radian, setRadian] = useState(true);

  const toggleRadian = () => setRadian((r) => !r);

  const calculate = () => {
    if (!expression) return;
    try {
      const result = evaluate(expression, radian);
      setAnswer(result);
    } catch {
      setAnswer("Error");
    }
  };

  const handleInput = (value: string) => {
    if (value === "AC") {
      setExpression("");
      setAnswer("");
      return;
    }

    if (value === "=") {
      calculate();
      return;
    }

    setExpression((prev) => prev + value);
  };

  // 🔥 KEYBOARD FIX
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        calculate();
      } else if (e.key === "Backspace") {
        setExpression("");
        setAnswer("");
      } else if (/[0-9+\-*/().]/.test(e.key)) {
        setExpression((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expression, radian]);

  return {
    expression,
    answer,
    radian,
    toggleRadian,
    handleInput,
  };
}
