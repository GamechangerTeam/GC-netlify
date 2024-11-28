import React from "react";
import "./section2.scss";
import Image from "next/image";
import Button from "@/components/ui/Button";
export default function Section2() {
  return (
    <div className="section2" id="section2">
      <div className="container">
        <h2>
          Битрикс 24 - это решение
          <span className="gold_text">все в одном</span> для бизнеса
        </h2>
        <p className="section2__subtitle">
          Компания 1С-Битрикс, основанная в 1998 году, завоевала доверие
          <span className="gold_text">10 млн + компаний</span> по всему миру.
          Сегодня это самая популярная система управления в странах СНГ,
          помогает бизнесам эффективно управлять процессами и достигать новых
          вершин.
        </p>

        <ul className="section2__list">
          <li className="section2__card">
            <Button className="open_popup" popup="contactUs">
              <div className="section2__card__header">
                Управление <span className="gold_text">продажами</span>
              </div>
              <div className="section2__card__footer">
                <span>
                  от{" "}
                  <span className="section2__card__price">150&nbsp;000т</span>
                </span>
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="arrow-right icon svg"
                  width={26}
                  height={22}
                />
              </div>
            </Button>
          </li>
          <li className="section2__card">
            <Button className="open_popup" popup="contactUs">
              <div className="section2__card__header">
                Управление <span className="gold_text">предприятием</span>
              </div>
              <div className="section2__card__footer">
                <span>
                  от{" "}
                  <span className="section2__card__price">250&nbsp;000т</span>
                </span>
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="arrow-right icon svg"
                  width={26}
                  height={22}
                />
              </div>
            </Button>
          </li>

          <li className="section2__card">
            <Button className="open_popup" popup="contactUs">
              <div className="section2__card__header">
                Управление <span className="gold_text">платежами</span>
              </div>
              <div className="section2__card__footer">
                <span>
                  от{" "}
                  <span className="section2__card__price">100&nbsp;000т</span>
                </span>
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="arrow-right icon svg"
                  width={26}
                  height={22}
                />
              </div>
            </Button>
          </li>
          <li className="section2__card">
            <Button className="open_popup" popup="segments">
              <div className="section2__card__header">
                Посмотреть <span className="gold_text">пакеты</span>
              </div>
              <div className="section2__card__footer">
                <span>выберите свою нишу</span>

                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="arrow-right icon svg"
                  width={26}
                  height={22}
                />
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
