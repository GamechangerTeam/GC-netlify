"use client"
import React from "react";
import "./footer.scss";
import Image from "next/image";
import Input from "../ui/Input";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links footer__wrapper">
          <a href="#" className="footer__links--home">
            Gamechanger
          </a>
          <button className="open_popup" data-popup="segment">
            Выбрать нишу
          </button>
          <a href="/bitrix24"> Обзор Битрикс24 </a>
          <a href="#popup:rewiews" className="footer__links--reviews">
            Отзывы
          </a>
        </div>
        <div className="footer__info footer__wrapper">
          <p>ТОО &quot;Gamechanger&quot;</p>
          <p>БИН: 230940024402</p>
          <p>Караганда, Алалыкина 12/1</p>
          <p>+77752214996</p>
          <p>Sales@gamechanger.kz</p>
        </div>
        <div className="footer__email">
          <p>Присоединяйтесь к нашей рассылке</p>
          <Input
            type="email"
            name="email"
            className="footer__input"
            id="email"
            text="Email"
          >
            <button onClick={() => console.log("asdsadads")}>
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right icon svg"
                width={16}
                height={13}
              />
            </button>
          </Input>
        </div>
      </div>
    </footer>
  );
}
