import React from "react";

export default function ConvertButton({ onClick }) {
  return (
    <button className="btn btn-primary w-100" onClick={onClick}>
      Convertir
    </button>
  );
}
