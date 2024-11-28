import Button from "@/components/ui/Button";
import React from "react";
import "./order.scss";

export default function Order() {
  return (
    <div className="container">
      <div className="order">
        <h2>
          Закажите систему которая отображает индивидуальность вашего бизнеса
        </h2>
        <p> 
          На комплексные решения располагаются{" "}
          <span className="gold_text">скидки до 40%</span>
        </p>
        <Button popup="contactUs">Индивидуальное решение</Button>
      </div>
    </div>
  );
}
