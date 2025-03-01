import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyInput from "./components/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

const currencies = ["USD", "EUR", "GBP", "JPY"];

export default function CurrencyConverter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const convertCurrency = async () => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, amount: parseFloat(amount) }),
      });

      const data = await response.json();
      if (response.ok) {
        setConvertedAmount(data.convertedAmount);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Error en la conexión");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Conversor de Divisas</h1>
        <CurrencyInput label="Monto" value={amount} onChange={setAmount} />
        <CurrencySelect
          label="De"
          value={from}
          onChange={setFrom}
          options={currencies}
        />
        <CurrencySelect
          label="A"
          value={to}
          onChange={setTo}
          options={currencies}
        />
        <ConvertButton onClick={convertCurrency} />
        <ResultDisplay
          convertedAmount={convertedAmount}
          currency={to}
          error={error}
        />
      </div>
    </div>
  );
}
