import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import { ru } from "react-day-picker/locale";

export function DatePicker({ className }) {
  const [selected, setSelected] = useState();
  const today = new Date();

  const month = today.getMonth();
  const day = today.getDate();
  const year = today.getFullYear();

  return (
    <DayPicker
      startMonth={new Date(year, month, day)}
      disabled={{ before: today }}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      // footer={
      //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      // }
      className={className}
    />
  );
}
