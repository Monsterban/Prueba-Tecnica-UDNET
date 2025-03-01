import React from "react";

export default function ResultDisplay({ convertedAmount, currency, error }) {
  return (
    <>
      {convertedAmount !== null && (
        <p className="mt-3 text-center fw-bold">
          Resultado: {convertedAmount} {currency}
        </p>
      )}
      {error && <p className="mt-2 text-danger text-center">{error}</p>}
    </>
  );
}
