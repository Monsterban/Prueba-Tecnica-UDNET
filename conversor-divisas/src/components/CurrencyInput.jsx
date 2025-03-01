import React from "react";

export default function CurrencyInput({ label, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <span className="input-group-text px-4">
          <i className="bi-cash-coin text-dark"></i>
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-control"
        />
      </div>
    </div>
  );
}
