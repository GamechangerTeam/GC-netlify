"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Section3_Swiper() {
  const imagesPaths = [
    "/images/logotypes/aibolit.png",
    "/images/logotypes/akra.png",
    "/images/logotypes/Alhadaya.png",
    "/images/logotypes/ASC.png",
    "/images/logotypes/Briliance.png",
    "/images/logotypes/COPAKZ.png",
    "/images/logotypes/DentOK.png",
    "/images/logotypes/DH.png",
    "/images/logotypes/GD.png",
    "/images/logotypes/Gorodok.png",
    "/images/logotypes/itcomed.png",
    "/images/logotypes/JinaJihaz.png",
    "/images/logotypes/KazIvent.png",
    "/images/logotypes/KTS.png",
    "/images/logotypes/Martensteel.png",
    "/images/logotypes/MYD.png",
    "/images/logotypes/Narodniy Perevodchik.png",
    "/images/logotypes/NormaN.png",
    "/images/logotypes/OCTO.png",
    "/images/logotypes/OnlyMassage.png",
    "/images/logotypes/TechEx.png",
    "/images/logotypes/TerriconValley.png",
    "/images/logotypes/TheMeal.png",
    "/images/logotypes/Toreo.png",
    "/images/logotypes/usserv.png",
    "/images/logotypes/Uzuri.png",
    "/images/logotypes/WhyCook.png",
    "/images/logotypes/ZooZoo.png",
  ];

  const settings = {
    className: "swiper",
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 32,
      },

      600: {
        slidesPerView: 5,
        spaceBetween: 24,
      },

      350: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  };
  return (
    <Swiper {...settings}>
      {imagesPaths.map((path, key) => (
        <SwiperSlide key={key} className="swiper-slide">
          <Image
            src={path}
            alt="company logo"
            width={150}
            height={150}
            loading="lazy"
            // quality={100}
            // unoptimized 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
