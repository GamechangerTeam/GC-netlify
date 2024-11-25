import Image from "next/image";
import React from "react";
import "./hero.scss";

export default function Hero({data}) {
  console.log(data);
  
  return (
    <div className="heroSegment" id="heroSegment">
      <div className="container">
      <h1>
        1С • Битрикс <br /> для <br /> {data}
      </h1>
      <p>
        Работайте на самой <br /> популярной системе в {""}
        <span className="gold_text">странах СНГ</span>
      </p>
      <div className="heroSegment__img-wrapper">
        <Image
          src="/images/bitrix-logo.gif"
          width={350}
          height={350}
          alt="Bitrix24 logo gif"
        />
      </div>
    
      </div>
    </div>
  );
}
