import { useState } from "react";
import "./styles.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [percentageSerice, setPercentageSerice] = useState(0);
  const [percentageFriendSerivce, setPercentageFriendSerivce] = useState(0);
  function handleReset() {
    setBillValue("");
    setPercentageSerice(0);
    setPercentageFriendSerivce(0);
  }
  return (
    <>
      <h1> Tip Calculator </h1>
      <BillInput billValue={billValue} onSetBillValue={setBillValue} />
      <SelectPercentage
        percentage={percentageSerice}
        onSelect={setPercentageSerice}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentageFriendSerivce}
        onSelect={setPercentageFriendSerivce}
      >
        How did your friend like the service?
      </SelectPercentage>

      <Output
        billValue={billValue}
        percentageSerice={percentageSerice}
        percentageFriendSerivce={percentageFriendSerivce}
      />
      <Reset handleReset={handleReset} />
    </>
  );
}

function BillInput({ billValue, onSetBillValue }) {
  return (
    <div>
      <label style={{ marginRight: "8px" }}>How much was the bill?</label>
      <input
        type="text"
        placeholder="bill value"
        value={billValue}
        onChange={(e) => {
          onSetBillValue(Number(e.target.value));
        }}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
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

function Output({ billValue, percentageSerice, percentageFriendSerivce }) {
  const sericeValue = percentageSerice / 2;
  const friendSerivceValue = percentageFriendSerivce / 2;
  const totalTip =
    billValue +
    billValue * (sericeValue / 100) +
    billValue * (friendSerivceValue / 100);
  return (
    <p style={{ fontWeight: "bold" }}>
      YOU PAY ${totalTip} (${billValue} + ${sericeValue + friendSerivceValue})
    </p>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
