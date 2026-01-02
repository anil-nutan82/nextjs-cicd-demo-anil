"use client";

import { useMileageCalculator } from "@/hooks/useMileageCalculator";

export default function MileageCalculator() {
  const m = useMileageCalculator();

  return (
    <div className="w-full lg:app-container mx-auto">
      <div className="grid lg:grid-cols-2 gap-5">
        {/* LEFT CARD */}
        <div className="rounded-xl border dark:border-[#2E2E2E] bg-white dark:bg-[#171717] shadow-sm overflow-hidden">
          <div className="bg-black text-yellow-400 px-5 py-4 text-lg md:text-xl font-semibold">
            Mileage: {m.mileage.toFixed(2)} km/L
          </div>

          <div className="p-5 space-y-6">
            {/* Distance */}
            <InputBlock
              label="Distance"
              value={m.distance}
              onChange={(v) => m.setDistance(v)}
              unit1="Km"
              unit2="Miles"
              activeUnit={m.distanceUnit}
              onUnitChange={(u) => m.setDistanceUnit(u as any)}
              placeholder="Enter Distance"
            />

            {/* Fuel */}
            <InputBlock
              label="Fuel"
              value={m.fuel}
              onChange={(v) => m.setFuel(v)}
              unit1="Ltr"
              unit2="Gal"
              activeUnit={m.fuelUnit}
              onUnitChange={(u) => m.setFuelUnit(u as any)}
              placeholder="Enter Fuel"
            />

            {/* Amount */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-neutral-700 dark:text-white">
                Fuel Price
              </div>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={m.amount || ""}
                  onChange={(e) => m.setAmount(+e.target.value)}
                  placeholder="Fuel Price"
                  className="w-full h-10 rounded-lg border dark:border-[#2E2E2E] bg-white dark:bg-[#171717] px-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  value={m.currency}
                  onChange={(e) => m.setCurrency(e.target.value)}
                  className="h-10 rounded-lg border dark:border-[#2E2E2E] bg-white dark:bg-[#171717] px-3 text-sm"
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
              className="w-full h-11 rounded-lg bg-[#d16817] text-black font-semibold flex items-center justify-center gap-2 hover:brightness-95"
            >
              RESET
            </button>
          </div>
        </div>

        {/* RIGHT SIDE OUTPUT */}
        <div className="space-y-10">
          <OutputCard
            distance={m.distanceInKm}
            fuel={m.fuelInLiters}
            amount={m.amount}
            currency={m.currency}
            fuelCostPerKm={m.fuelCostPerKm}
          />

          <div className="rounded-xl bg-black text-white border dark:border-[#2E2E2E] px-6 py-5">
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

function InputBlock({
  label,
  value,
  onChange,
  unit1,
  unit2,
  activeUnit,
  onUnitChange,
  placeholder,
}: any) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-neutral-700 dark:text-white">
        {label}
      </div>
      <div className="flex gap-3">
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(+e.target.value)}
          placeholder={placeholder}
          className="w-full h-10 rounded-lg border dark:border-[#2E2E2E] bg-white dark:bg-[#171717] px-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <div className="flex items-center rounded-full border dark:border-[#2E2E2E] px-1 h-10">
          {[unit1, unit2].map((u) => (
            <button
              key={u}
              onClick={() => onUnitChange(u.toLowerCase())}
              className={`px-3 h-8 rounded-full text-sm font-medium ${
                activeUnit === u.toLowerCase()
                  ? "bg-yellow-400 text-black"
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

function OutputCard({ distance, fuel, amount, currency, fuelCostPerKm }: any) {
  return (
    <div className="rounded-xl border dark:border-[#2E2E2E] dark:bg-[#171717] overflow-hidden">
      {[
        ["Distance", `${distance.toFixed(2)} km`],
        ["Fuel", `${fuel.toFixed(2)} ltr`],
        ["Total Amount", `${currency} ${amount}`],
        ["Fuel Cost Per", `${currency} ${fuelCostPerKm.toFixed(2)} / km`],
      ].map(([k, v]) => (
        <div key={k} className="grid grid-cols-2 border-t dark:border-[#2E2E2E]">
          <div className="px-4 py-3 text-neutral-600 dark:text-white">{k}</div>
          <div className="px-4 py-3 font-medium">{v}</div>
        </div>
      ))}
    </div>
  );
}


