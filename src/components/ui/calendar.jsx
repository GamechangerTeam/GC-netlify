import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import { ru } from "react-day-picker/locale";

export function DatePicker() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
    locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
