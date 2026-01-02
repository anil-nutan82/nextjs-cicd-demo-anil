"use client";

import { useMemo, useState } from "react";

export function useMileageCalculator() {
  const [distance, setDistance] = useState<number>(0);
  const [fuel, setFuel] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const [distanceUnit, setDistanceUnit] = useState<"km" | "miles">("km");
  const [fuelUnit, setFuelUnit] = useState<"ltr" | "gal">("ltr");
  const [currency, setCurrency] = useState("INR");

  // conversions
  const distanceInKm = useMemo(() => {
    return distanceUnit === "miles" ? distance * 1.60934 : distance;
  }, [distance, distanceUnit]);

  const fuelInLiters = useMemo(() => {
    return fuelUnit === "gal" ? fuel * 3.78541 : fuel;
  }, [fuel, fuelUnit]);

  const mileage = useMemo(() => {
    if (distanceInKm <= 0 || fuelInLiters <= 0) return 0;
    return distanceInKm / fuelInLiters;
  }, [distanceInKm, fuelInLiters]);

  const fuelCostPerKm = useMemo(() => {
    if (distanceInKm <= 0 || amount <= 0) return 0;
    return amount / distanceInKm;
  }, [amount, distanceInKm]);

  const reset = () => {
    setDistance(0);
    setFuel(0);
    setAmount(0);
  };

  return {
    distance,
    fuel,
    amount,
    distanceUnit,
    fuelUnit,
    currency,
    mileage,
    distanceInKm,
    fuelInLiters,
    fuelCostPerKm,
    setDistance,
    setFuel,
    setAmount,
    setDistanceUnit,
    setFuelUnit,
    setCurrency,
    reset,
  };
}
