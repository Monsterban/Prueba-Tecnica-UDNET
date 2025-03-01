import React from "react";

export default function CurrencyInput({ label, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
}
