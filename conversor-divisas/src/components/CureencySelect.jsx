import React from "react";

export default function CurrencySelect({ label, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-select"
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
