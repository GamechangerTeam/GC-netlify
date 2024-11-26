import React from "react";
import ButtonText from "@/components/ui/Button-text";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <h1 className="home-screen__title">
        Заголовок для <br /> главного экрана
      </h1>
      <div className="home-screen__buttons">
        <ButtonText className={"home-screen__button"}>Сертификаты</ButtonText>

        <ButtonText className={"home-screen__button"}>
          Заказать звонок
        </ButtonText>
      </div>
    </div>
  );
}
