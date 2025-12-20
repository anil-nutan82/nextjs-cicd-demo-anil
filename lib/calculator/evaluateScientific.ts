export function evaluate(input: string, radian: boolean): string {
  let expr = input
    .replace(/π/g, Math.PI.toString())
    .replace(/e/g, Math.E.toString())
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/√/g, "Math.sqrt")
    .replace(/xʸ/g, "**")
    .replace(/sin/g, radian ? "Math.sin" : "degSin")
    .replace(/cos/g, radian ? "Math.cos" : "degCos")
    .replace(/tan/g, radian ? "Math.tan" : "degTan")
    .replace(/ln/g, "Math.log")
    .replace(/log/g, "Math.log10");

  const degSin = (x: number) => Math.sin((x * Math.PI) / 180);
  const degCos = (x: number) => Math.cos((x * Math.PI) / 180);
  const degTan = (x: number) => Math.tan((x * Math.PI) / 180);

  // Controlled Function execution
  // eslint-disable-next-line no-new-func
  const result = Function(
    "Math",
    "degSin",
    "degCos",
    "degTan",
    `return ${expr}`
  )(Math, degSin, degCos, degTan);

  return Number.isFinite(result) ? result.toString() : "Error";
}
