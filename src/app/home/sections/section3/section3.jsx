import React from "react";
import "./section3.scss";
import Section3_Swiper from "./swiper";
import ButtonText from "@/components/ui/Button-text";
export default function Section3() {
  return (
    <div className="section3" id="section3">
      <div className="container">
        <h2>
          Более <span className="gold_text">5000 пользователей</span> работают
          на настроенных нами системах в
          <span className="gold_text">13&nbsp;городах</span> Казахстана
        </h2>
        <Section3_Swiper />

        <div className="section3__footer">
          <p className="section3__description">
            100% <span className="gold_text">наших клиентов</span> советуют наши
            услуги другим!
          </p>
          <div className="section3__footer__btns">
            <ButtonText>Отзывы</ButtonText>
            <ButtonText>Кейсы</ButtonText>
          </div>
        </div>
      </div>
    </div>
  );
}
