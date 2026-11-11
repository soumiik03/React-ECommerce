import { Accordian } from "./Accordian";
import { useState } from "react";

function Men() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl">Filter Options</h1>
      {
        //controlled component
        ["Brand", "Men", "Women"].map((title, index) => (
          <Accordian
            key={index}
            title={title}
            open={index === open}
            setOpen={() => setOpen(open === index ? null : index)}
          />
        ))
      }
    </div>
  );
}

export default Men;
