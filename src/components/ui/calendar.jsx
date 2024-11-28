import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import { da, ru } from "react-day-picker/locale";

export function DatePicker({ className, datepickerHandler }) {
  const [selected, setSelected] = useState();
  const today = new Date();

  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "",
  ];

  const holidays = [
    new Date(2024, 0, 1), // Новый Год
    new Date(2024, 2, 8), // 8 Марта
    new Date(2024, 4, 1), // День труда
    new Date(2024, 11, 31), // Новый Год
  ];

  // Функция для проверки недоступных дат
  const isDisabled = (date) => {
    const day = date.getDay();
    // Отключаем прошлые дни
    if (date < today.setHours(0, 0, 0, 0)) {
      return true;
    }
    // Отключаем выходные
    if (day === 0 || day === 6) {
      return true;
    }
    // Отключаем праздничные дни
    return holidays.some(
      (holiday) =>
        date.getDate() === holiday.getDate() &&
        date.getMonth() === holiday.getMonth() &&
        date.getFullYear() === holiday.getFullYear()
    );
  };

  function ad(e) {
    if (e) {
      setSelected(e);
      const year = e.getFullYear();
      const month = e.getMonth();
      const date = e.getDate();
      const day = e.getDay();
      console.log(year, month, date, day);
      datepickerHandler({ year, month, date, day });
    }
  }

  return (
    <DayPicker
      startMonth={today}
      disabled={isDisabled}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={ad}
      // footer={
      //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      // }
      className={className}
    />
  );
}
