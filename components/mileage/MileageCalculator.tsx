"use client";

import { useMileageCalculator } from "@/hooks/useMileageCalculator";

/* ---------------- TYPES ---------------- */

type Unit = "km" | "miles" | "ltr" | "gal";

interface InputBlockProps {
  label: string;
  value: number;
  placeholder: string;
  unit1: string;
  unit2: string;
  activeUnit: Unit;
  onChange: (value: number) => void;
  onUnitChange: (unit: Unit) => void;
}

interface OutputCardProps {
  distance: number;
  fuel: number;
  amount: number;
  currency: string;
  fuelCostPerKm: number;
}

/* ---------------- MAIN ---------------- */

export default function MileageCalculator() {
  const m = useMileageCalculator();

  return (
    <div className="w-full lg:app-container mx-auto">
      <div className="grid lg:grid-cols-2 gap-5">
        {/* LEFT CARD */}
        <div className="rounded-xl border dark:border-[#2E2E2E] bg-white dark:bg-[#171717] shadow-sm overflow-hidden">
          <div className="bg-black text-[#E11D48] px-5 py-4 text-lg md:text-xl font-semibold">
            Mileage: {m.mileage.toFixed(2)} km/L
          </div>

          <div className="p-5 space-y-6">
            <InputBlock
              label="Distance"
              value={m.distance}
              onChange={(v: number) => m.setDistance(v)}
              unit1="Km"
              unit2="Miles"
              activeUnit={m.distanceUnit}
              onUnitChange={(u: Unit) => m.setDistanceUnit(u)}
              placeholder="Enter Distance"
            />

            <InputBlock
              label="Fuel"
              value={m.fuel}
              onChange={(v: number) => m.setFuel(v)}
              unit1="Ltr"
              unit2="Gal"
              activeUnit={m.fuelUnit}
              onUnitChange={(u: Unit) => m.setFuelUnit(u)}
              placeholder="Enter Fuel"
            />

            {/* Fuel Price */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-neutral-700 dark:text-white">
                Fuel Price
              </div>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={m.amount || ""}
                  onChange={(e) => m.setAmount(Number(e.target.value))}
                  placeholder="Fuel Price"
                  className="w-full h-10 rounded-lg border dark:border-[#2E2E2E]
                  bg-white dark:bg-[#171717] px-3 text-sm outline-none
                  focus:ring-2 focus:ring-[#FDA4AF]"
                />
                <select
                  value={m.currency}
                  onChange={(e) => m.setCurrency(e.target.value)}
                  className="h-10 rounded-lg border dark:border-[#2E2E2E]
                  bg-white dark:bg-[#171717] px-3 text-sm"
                >
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>AED</option>
                </select>
              </div>
            </div>

            <button
              onClick={m.reset}
              className="w-full h-11 rounded-lg bg-[#E11D48]
              text-black font-semibold hover:bg-[#BE123C]
              active:translate-y-[1px]"
            >
              RESET
            </button>
          </div>
        </div>

        {/* RIGHT OUTPUT */}
        <div className="space-y-10">
          <OutputCard
            distance={m.distanceInKm}
            fuel={m.fuelInLiters}
            amount={m.amount}
            currency={m.currency}
            fuelCostPerKm={m.fuelCostPerKm}
          />

          <div className="rounded-xl bg-black text-[#E11D48]
          border dark:border-[#2E2E2E] px-6 py-5">
            <div className="text-lg font-semibold">Mileage</div>
            <div className="text-3xl md:text-5xl font-extrabold mt-1">
              {m.mileage.toFixed(2)} km/L
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function InputBlock({
  label,
  value,
  onChange,
  unit1,
  unit2,
  activeUnit,
  onUnitChange,
  placeholder,
}: InputBlockProps) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-neutral-700 dark:text-white">
        {label}
      </div>
      <div className="flex gap-3">
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          className="w-full h-10 rounded-lg border dark:border-[#2E2E2E]
          bg-white dark:bg-[#171717] px-3 text-sm outline-none
          focus:ring-2 focus:ring-[#FDA4AF]"
        />
        <div className="flex items-center rounded-full border
        dark:border-[#2E2E2E] px-1 h-10">
          {[unit1, unit2].map((u) => (
            <button
              key={u}
              onClick={() => onUnitChange(u.toLowerCase() as Unit)}
              className={`px-3 h-8 rounded-full text-sm font-medium transition
              ${
                activeUnit === u.toLowerCase()
                  ? "bg-[#E11D48] text-black"
                  : "text-neutral-600"
              }`}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutputCard({
  distance,
  fuel,
  amount,
  currency,
  fuelCostPerKm,
}: OutputCardProps) {
  return (
    <div className="rounded-xl border dark:border-[#2E2E2E]
    dark:bg-[#171717] overflow-hidden">
      {[
        ["Distance", `${distance.toFixed(2)} km`],
        ["Fuel", `${fuel.toFixed(2)} ltr`],
        ["Total Amount", `${currency} ${amount || 0}`],
        ["Fuel Cost Per", `${currency} ${fuelCostPerKm.toFixed(2)} / km`],
      ].map(([k, v]) => (
        <div
          key={k}
          className="grid grid-cols-2 border-t dark:border-[#2E2E2E]"
        >
          <div className="px-4 py-3 text-neutral-600 dark:text-white">
            {k}
          </div>
          <div className="px-4 py-3 font-medium">{v}</div>
        </div>
      ))}
    </div>
  );
}
