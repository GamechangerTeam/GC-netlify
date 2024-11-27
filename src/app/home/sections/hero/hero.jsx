import Image from "next/image";
import React from "react";
import "./hero.scss";
import ButtonText from "@/components/ui/Button-text";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <h1>
          Комплексное <br />
          внедрение Битрикс24
        </h1>
        <p className="hero__subtitle">
          От признанного <span className="gold_text">золотого партнера</span>
        </p>
        <div className="hero__btns">
          <ButtonText>Сертификаты</ButtonText>
          <ButtonText popup="contactUs">Заказать звонок</ButtonText>
        </div>
        <p className="hero__description">
          Gamechanger ТОО предлагает <br />
          <span className="gold_text">эффективные решения</span> для вашего{" "}
          <br />
          бизнеса, обеспечивая полное <br />
          обучение вашей команды и <br />
          <span className="gold_text">бесплатное</span>
          сопровождение 24/7.
        </p>
        <div className="hero__video-wrapper">
        <Image src={"/video/Logo-big.gif"} alt="asd" width={400} height={400} />
          {/* <div className="video_wrapper"></div> */}
        </div>
      </div>
    </div>
  );
}
