import React from "react";
import "./section6.scss";
import Form from "@/components/form/Form";
export default function Section6() {
  return (
    <div className="section6" id="section6">
      <div className="container">
        <h2>
          Опишите свое техническое задание, и получите оценку стоимости{' '}
          <span className="gold_text">за&nbsp;15&nbsp;минут!</span>
        </h2>
        <Form />
      </div>
    </div>
  );
}
