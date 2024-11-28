"use client";
import React from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Form from "@/components/form/Form";
import Popup from "@/components/ui/Popup";
import "./contact.scss";
import Image from "next/image";

export default function ContactUs() {
  const { closePopup } = useModal();
  return (
    <Popup className="contactUs" popupName="contactUs">
      <div className="contactUs__wrapper">
        <button className="close_popup" onClick={closePopup}>
          <Image
            src="/icons/close-btn.svg"
            width={64}
            height={64}
            alt="close btn"
          />
        </button>
        <h2>Свяжитесь с нами</h2>
        <Form />
      </div>
      <Image src="/video/Logo-new.gif" className="contactUs__logo" alt="lox" width={300} height={300} />
    </Popup>
  );
}
