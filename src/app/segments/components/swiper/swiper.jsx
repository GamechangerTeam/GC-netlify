"use client";
import React from "react";
// swiper
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// others
import Image from "next/image";
import "./swiper.scss";
import ButtonText from "@/components/ui/Button-text";

export default function Segments_swiper({ id, data }) {
  const changeBulletWrapper = (e) => {
    // document.documentElement.style.setProperty(
    //   "--active-swiper-slide",
    //   `${e.activeIndex}`
    // );

    const style = document.createElement("style");
    style.textContent = `
      #swiper-pagination-${id}::after {
    left: calc(32px * ${e.activeIndex});

      }
    `;
    document.head.appendChild(style);
  };

  const settings = {
    modules: [Navigation, Pagination],
    className: "segments-swiper",
    id,
    slidesPerView: 1,
    spaceBetween: 16,
    // allowTouchMove: false,
    autoHeight: true,
    speed: "500",
    navigation: {
      nextEl: `.swiper-button-next-${id}`,
      prevEl: `.swiper-button-prev-${id}`,
    },
    pagination: { el: ".swiper-pagination", clickable: false },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      525: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
    },
    onSlideChange: changeBulletWrapper,
  };

  return (
    <Swiper {...settings}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <p className="segments-swiper__subtitle">{item.subtitle}</p>
          <h3>{item.title}</h3>
          <ul>
            {item.list.map((listItem, listItemIndex) => (
              <li key={listItemIndex}>
                <Image
                  src={
                    id === "bitrix-swiper"
                      ? "/icons/select.svg"
                      : "/icons/select-gold.svg"
                  }
                  width={16}
                  height={16}
                  alt="select icon svg"
                />

                <p>{listItem}</p>
              </li>
            ))}
          </ul>
          {id === "bitrix-swiper" ? (
            <div className="segments-swiper__footer">
              <div className="segments-swiper__price-wrapper">
                <span className="segments-swiper__price">{item.price[0]}</span>
                <div className="segments-swiper__price--line"></div>
                <span className="segments-swiper__price">{item.price[1]}</span>
              </div>

              <ButtonText className="segments-swiper__order-btn">
                Заказать
              </ButtonText>
            </div>
          ) : (
            <div
              className={`segments-swiper__footer ${
                item.price.includes("отчет") &&
                "segments-swiper__footer--bitrix"
              }`}
            >
              <p className="segments-swiper__days">{item.days}</p>
              <span className="segments-swiper__price">{item.price}</span>
              <ButtonText className="segments-swiper__order-btn">
                Заказать
              </ButtonText>
            </div>
          )}
        </SwiperSlide>
      ))}

      <div className="swiper-pagination" id={`swiper-pagination-${id}`}></div>
    </Swiper>
  );
}