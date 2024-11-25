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
          <div className="video_wrapper">
            <Image
              src={"/images/Logo_preloader.png"}
              alt="asd"
              width={100}
              height={100}
            />
            {/* <Image
              src={"/video/Logo.gif"}
              alt="asd"
              width={100}
              height={100}
            /> */}
            {/* <VideoLogo/> */}
            {/* <video
              className="hero__video"
              id="video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video/lol.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео. 
              
            </video> */}
            {/* <video
            autoplay
            muted
            playsinline
            loop
            className="hero__video-wrapper__video"
            id="video"
          >
          <source src="https://dl.dropbox.com/scl/fi/e83xkaz17u5sxz5wgunb1/Logo-animated.mp4?rlkey=0uauqncvbselkgfc3yyk4vcti&amp;st=d3qiontx&amp;dl=0" type="video/mp4"> 
          </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}
