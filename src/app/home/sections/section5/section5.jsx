import React from "react";
import "./section5.scss";
export default function Section5() {
  return (
    <div className="section5" id="section5">
      <section className="container">
        <h2>В каждое внедрение входит</h2>
        <ul className="section5__list">
          <li className="section5__card">
            <img
              src="https://static.tildacdn.com/tild3339-6134-4930-b832-363732333235/Group.svg"
              alt="infinity svg icon"
            />
            <p>
              Неограниченное количество полей и автоматических сценариев
              (роботов)
            </p>
          </li>
          <li className="section5__card">
            <img
              src="https://static.tildacdn.com/tild6534-3039-4532-b439-663932633831/planning_1.svg"
              alt="planning svg icon"
            />
            <p>
              Индивидуально настроенные панели задач для каждого руководителя
            </p>
          </li>
          <li className="section5__card">
            <img
              src="https://static.tildacdn.com/tild3331-3566-4164-b530-313461633365/creativity.svg"
              alt="creativity svg icon"
            />
            <p>Полная кастомизация всех рабочих мест под ваши потребности</p>
          </li>
          <li className="section5__card">
            <img
              src="https://static.tildacdn.com/tild6662-6363-4662-b333-363130663266/customer-service_1.svg"
              alt="service svg icon"
            />
            <p>
              Неограниченное количество обращений в службу поддержки в период
              обслуживания
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
