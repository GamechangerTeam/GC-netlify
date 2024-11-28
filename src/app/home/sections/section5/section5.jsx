import React from "react";
import "./section5.scss";
import Image from "next/image";
export default function Section5() {
  return (
    <div className="section5" id="section5">
      <section className="container">
        <h2>В каждое внедрение входит</h2>
        <ul className="section5__list">
          <li className="section5__card">
            <Image
              src="/icons/infinity.svg"
              alt="icon svg"
              width={64}
              height={64}
            />
            <p>
              Неограниченное количество полей и автоматических сценариев
              (роботов)
            </p>
          </li>
          <li className="section5__card">
            <Image
              src="/icons/tasks.svg"
              alt="icon svg"
              width={64}
              height={64}
            />
            <p>
              Индивидуально настроенные панели задач для каждого руководителя
            </p>
          </li>
          <li className="section5__card">
            <Image
              src="/icons/creativity.svg"
              alt="icon svg"
              width={64}
              height={64}
            />

            <p>Полная кастомизация всех рабочих мест под ваши потребности</p>
          </li>
          <li className="section5__card">
            <Image
              src="/icons/customer.svg"
              alt="icon svg"
              width={64}
              height={64}
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
