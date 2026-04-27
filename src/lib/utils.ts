import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PHP = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export function formatPHP(amount: number): string {
  return PHP.format(amount);
}

export function formatPHPShort(amount: number): string {
  // ₱8,400 → "₱8.4K"; ₱9,800 → "₱9.8K"; ₱24,000 → "₱24K"
  if (amount >= 1000) {
    const k = amount / 1000;
    return `₱${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}K`;
  }
  return PHP.format(amount);
}

export function formatDateLong(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
