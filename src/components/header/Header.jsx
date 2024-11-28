"use client";
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import "./header.scss";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import Popup from "../ui/Popup";

export default function Header() {
  const [active, setActive] = useState(false);
  const handleBurger = () => {
    setActive(!active);
  };

  const closeMobileHeader = () => {
    setActive(false);
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <header className={`header  ${active ? "active" : ""}`}>
      <div className="container">
        <Popup />
        <Link href={"/"} className="header__home" onClick={closeMobileHeader}>
          Gamechanger
        </Link>
        <Button
          className="header__calendar"
          onClick={closeMobileHeader}
          popup="calendar"
        >
          Связаться с руководством
        </Button>
        <button
          className={`header__burger ${active ? "active" : ""}`}
          onClick={handleBurger}
        >
          <div className="header__burger__wrapper">
            <span className="header__burger--top"></span>
            <span className="header__burger--center"></span>
            <span className="header__burger--bottom"></span>
            <Image
              src={
                "https://static.tildacdn.com/tild6130-3463-4831-b736-656532633637/cross.svg"
              }
              width={100}
              height={100}
              alt={"asdsad"}
            />
          </div>
        </button>
        <ul className="header__list">
          <li>
            <Link href={"/about"} onClick={closeMobileHeader}>
              О нас
            </Link>
          </li>
          <li>
            <Button popup="segments">Выбрать нишу</Button>
          </li>
          <li>
            <Link href={"/bitrix24"} onClick={closeMobileHeader}>
              Обзор Битрикс24
            </Link>
          </li>
          <li>
            <Button onClick={closeMobileHeader} popup="video-popup" videoSrc="/video/reviews/WhyCook.mp4">Отзывы</Button>
          </li>
          <li>
            <a
              href="https://wa.me/77752214996?text=Здравствуйте%2C+хочу+уточнить+детали"
              target="_blank"
              className="header__whatsapp"
              onClick={closeMobileHeader}
            >
              Написать нам
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
