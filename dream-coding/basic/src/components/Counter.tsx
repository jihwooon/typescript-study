import { useState } from "react";

interface Props {
  total: number;
  onClick: () => void;
}

export default function Counter({ total, onClick }: Props) {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    onClick();
  };

  return (
    <div className="counter">
      <p className="number">{count} <span className="total">/{total}</span></p>
      <button className="button" onClick={increment}>Add +</button>
    </div>
  );
}
