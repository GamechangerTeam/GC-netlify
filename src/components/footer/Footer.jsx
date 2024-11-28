"use client";
import React, { useState } from "react";
import "./footer.scss";
import Image from "next/image";
import Input from "../ui/Input";
import ButtonText from "../ui/Button-text";

export default function Footer() {
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    console.log(email);
    
  };
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__links footer__wrapper">
          <a href="#" className="footer__links--home">
            Gamechanger
          </a>

          <ButtonText className="open_popup" popup="segments">
            Выбрать нишу
          </ButtonText>

          <a href="/bitrix24" className="open_popup">
            {" "}
            Обзор Битрикс24{" "}
          </a>
          <ButtonText
            className="open_popup"
            popup="video-popup"
            videoSrc="/video/reviews/WhyCook.mp4"
          >
            Отзывы
          </ButtonText>
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
            onChange={(e) => setEmail(e.target.value)}
          >
            <button onClick={sendEmail}>
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
