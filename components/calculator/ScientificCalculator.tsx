"use client";

import { useCalculator } from "@/hooks/useCalculator";
import CalcButton from "./CalcButton";

const buttons = [
  ["e", "π", "(", ")", "%", "AC"],
  ["sin", "cos", "7", "8", "9", "÷"],
  ["ln", "log", "4", "5", "6", "×"],
  ["tan", "√", "1", "2", "3", "-"],
  ["x!", "xʸ", "0", ".", "=", "+"],
];

export default function ScientificCalculator() {
  const {
    expression,
    answer,
    radian,
    toggleRadian,
    handleInput,
  } = useCalculator();

  return (
    <div className="w-[600px] rounded-xl bg-[#202124] p-5 my-7 text-white shadow-2xl">
      {/* Header */}
      <div className="mb-3 mt-3 flex justify-between text-xl text-gray-400">
        <span>Calculator</span>
        <span>Answer = {answer || "0"}</span>
      </div>

      {/* Rad / Deg */}
      <div className="mb-2 flex items-center gap-2 text-xs text-gray-300">
        <span>Rad</span>
        <button
          onClick={toggleRadian}
          className={`h-4 w-8 rounded-full ${
            radian ? "bg-blue-500" : "bg-gray-600"
          }`}
        />
        <span>Deg</span>
      </div>

      {/* Expression */}
      {/* <div className="h-8 text-right text-sm text-gray-400 overflow-hidden">
        {expression || "0"}
      </div> */}

      {/* Answer */}
      <div className="mb-3 h-14 rounded-lg bg-[#303134] p-3 text-right text-3xl">
        {expression || "0"}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-6 gap-2">
        {buttons.flat().map((value) => (
          <CalcButton
            key={value}
            value={value}
            onClick={() => handleInput(value)}
          />
        ))}
      </div>
    </div>
  );
}
