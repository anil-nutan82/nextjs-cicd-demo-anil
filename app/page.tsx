"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [n1, setN1] = useState("");
  const [p1, setP1] = useState("");
  const [n2, setN2] = useState("");
  const [p2, setP2] = useState("");
  const [avgInput, setAvgInput] = useState("");

  const q1 = Number(n1) || 0;
  const pr1 = Number(p1) || 0;
  const q2 = Number(n2) || 0;
  const pr2 = Number(p2) || 0;
  const avgManual = Number(avgInput);

  const total1 = q1 * pr1;
  const total2 = q2 * pr2;

  const totalQty = q1 + q2;

  // Auto average (if avg not manually entered)
  const avgAuto =
    totalQty === 0 ? 0 : (total1 + total2) / totalQty;

  // If avg is manually entered, calculate n2
  useEffect(() => {
    if (
      avgInput !== "" &&
      pr2 !== 0 &&
      q1 !== 0
    ) {
      const calculatedN2 =
        (avgManual * (q1 + q2) - total1) / pr2;

      if (!isNaN(calculatedN2)) {
        setN2(calculatedN2.toFixed(2));
      }
    }
  }, [avgInput, pr2]);

  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 Next.js CI/CD Demo v4</h1>

      <h2>Live Average Calculator</h2>

      <div style={{ display: "grid", gap: 10, maxWidth: 320 }}>
        <input
          type="number"
          placeholder="n1"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <input
          type="number"
          placeholder="p1"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
        />

        <input
          type="number"
          placeholder="n2"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />
        <input
          type="number"
          placeholder="p2"
          value={p2}
          onChange={(e) => setP2(e.target.value)}
        />

        <input
          type="number"
          placeholder="Average (manual override)"
          value={avgInput}
          onChange={(e) => setAvgInput(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <p>
          n1 × p1 Total: <strong>{total1.toFixed(2)}</strong>
        </p>
        <p>
          n2 × p2 Total: <strong>{total2.toFixed(2)}</strong>
        </p>
        <p>
          Average:{" "}
          <strong>
            {avgInput === ""
              ? avgAuto.toFixed(2)
              : avgManual.toFixed(2)}
          </strong>
        </p>
      </div>

      <p style={{ marginTop: 20 }}>
        Last update: {new Date().toISOString()}
      </p>
    </main>
  );
}
