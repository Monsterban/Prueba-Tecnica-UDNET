import React from "react";

export default function ConvertButton({ onClick }) {
  return (
    <button
      className="btn btn-success w-100"
      style={{ fontFamily: "JosefinSans, sans-serif" }}
      onClick={onClick}
    >
      <i class="bi bi-arrow-left-right"></i> Convertir
    </button>
  );
}
