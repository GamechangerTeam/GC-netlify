"use client";
import React from "react";
import Popup from "@/components/ui/Popup";
import { useModal } from "@/components/hooks/use-modal-store";
import Image from "next/image";
import "./videoPopup.scss"

export default function VideoPopup() {
  const { videoSrc, closePopup } = useModal();

  return (
    <Popup className="video-popup" popupName="video-popup">
      <button className="close_popup" onClick={closePopup}>
        <Image
          src="/icons/close-btn.svg"
          width={64}
          height={64}
          alt="close btn"
        />
      </button>

      <video key={videoSrc} controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Popup>
  );
}
