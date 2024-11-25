"use client";
import React from "react";
import "./BitrixBusinessImage.scss";
export default function BitrixBusinessImage({ image }) {
  // console.log(image);

  return (
    <div className="bitrix-overview__image__business bitrix-background">
      <div
        style={{ backgroundImage: `url(${image.imageSrc})` }}
        className="test-business"
      ></div>
    </div>
  );
}
