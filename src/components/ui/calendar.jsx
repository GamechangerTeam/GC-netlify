import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";

export function DatePicker() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
