import { useMemo, useState } from "react";
import { nthPrime } from "../utils/ProductList";

const Memo = () => {
  const [num, setNum] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const cachedValue=useMemo(()=>nthPrime(num), [num])  //Last is depedencies
  //const ans = nthPrime(num);

  console.log("render");

  return (
    <div
      className={`${
        isDark && "bg-gray-900 text-white"
      } max-w-4xl mx-auto border`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className="bg-blue-500 m-2 px-2 py-1 rounded"
      >
        Toggle Theme
      </button>

      <h1 className="font-bold text-xl">use memo</h1>

      <input
        className="border bg-gray-500 border-black"
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <h1>Prime Number is - {cachedValue}</h1>
    </div>
  );
};

export default Memo;
