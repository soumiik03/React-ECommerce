
import { useRef, useState } from "react";

const Ref = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  const ref2 = useRef<HTMLInputElement | null>(null);

  console.log(ref);
  console.log("re render...");

  const focusInputHandler = () => {
    ref2.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto border border-black mt-10">
      {/*
      <button
        className="bg-blue-500 rounded-md"
        onClick={() => {
          x = x + 1;
          console.log("x = ", x);
        }}
      >
        Increment X
      </button>

      <h1 className="font-bold text-2xl">X = {x}</h1>
      <h1 className="font-bold text-2xl">State Y = {y}</h1>

      <button
        className="bg-blue-500 rounded-md"
        onClick={() => {
          setY(y + 1);
        }}
      >
        Increment State Y
      </button>

      <h1 className="font-bold text-2xl">
        Ref = {ref.current}
      </h1>

      <button
        className="bg-blue-500 rounded-md"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref value = ", ref.current);
        }}
      >
        Increment Ref
      </button>
      */}

      <br />

      <input
        ref={ref2}
        type="file"
        className="border border-black"
        placeholder="Enter text"
      />

      <button onClick={focusInputHandler}>
        Click
      </button>
    </div>
  );
};

export default Ref;
