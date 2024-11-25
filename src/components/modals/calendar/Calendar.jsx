"use client";
import React, { useState } from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./calendar.scss";
import Image from "next/image";
import Link from "next/link";
import { Calendar, DatePicker } from "@/components/ui/calendar";

export default function CalendarPopup() {
  const { closePopup } = useModal();
  const [date, setDate] = useState(new Date());
  return (
    <Popup className="calendar" popupName="calendar">
      <DatePicker/>
      <button onClick={closePopup}> aa;sldjksalkdajsdkl</button>
    </Popup>
  );
}
