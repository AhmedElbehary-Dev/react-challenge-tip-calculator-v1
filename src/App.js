import { useState } from "react";
import "./styles.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [billValue, setBillValue] = useState();
  return (
    <>
      <h1> Tip Calculator </h1>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
    </>
  );
}

function BillInput() {
  return (
    <div>
      <label style={{ marginRight: "8px" }}>How much was the bill?</label>
      <input type="text" placeholder="bill value" />
    </div>
  );
}

function SelectPercentage({ children, percentage }) {
  return (
    <div>
      <label style={{ marginRight: "8px" }}>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absoy amazing! (20%)</option>
      </select>
    </div>
  );
}
