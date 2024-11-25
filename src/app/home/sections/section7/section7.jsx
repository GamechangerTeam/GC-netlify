import React from "react";
import "./section7.scss";
import Button from "@/components/ui/Button";
export default function Section7() {
  return (
    <div className="section7" id="section7">
      <div className="container">
        <div className="section7__wrapper">
          <h2>
            Не знаете подходит ли Битрикс24 вашей компании?
            <span className="gold_text">У нас есть решение!</span>
          </h2>
          <p className="section7__subtitle">
            Мы <span className="gold_text">бесплатно</span> настроим для вас
            полноценную систему на профессиональном тарифе и предоставим
            возможность поработать с ней целую неделю с полным сопровождением.
          </p>
          <p className="section7__text">
            Это предложение без обязательств, которое поможет вам понять,
            насколько система подходит именно вам.
          </p>

          <div className="section7__footer">
            <p>
              После вы сможете принять обоснованное решение <br />—{" "}
              <span className="gold_text">приобрести систему</span> или
              отказаться.
            </p>
            <Button>Испытать систему</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
