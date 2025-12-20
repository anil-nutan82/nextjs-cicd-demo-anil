interface Props {
  value: string;
  onClick: () => void;
}

export default function CalcButton({ value, onClick }: Props) {
  const isEquals = value === "=";
  const isOperator = ["+", "-", "×", "÷"].includes(value);

  return (
    <button
      onClick={onClick}
      className={`
        h-12 rounded-md text-sm font-medium
        ${
          isEquals
            ? "bg-[#8ab4f8] text-black"
            : isOperator
            ? "bg-[#5f6368]"
            : "bg-[#3c4043]"
        }
        hover:brightness-110 active:scale-95
      `}
    >
      {value}
    </button>
  );
}
