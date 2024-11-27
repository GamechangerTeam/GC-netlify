"use client";
import React, { useState } from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./calendar.scss";
import Image from "next/image";
import Link from "next/link";
import { Calendar, DatePicker } from "@/components/ui/calendar";

export default function CalendarPopup() {
  const { closePopup } = useModal();
  const [date, setDate] = useState(new Date());

  return (
    <Popup className="calendar" popupName="calendar">
      <h2>Готовы узнать как Битрикс24 изменит Ваш рабочий мир?</h2>
      <div className="wrapper">
        <div className="calendar__aside">
          <div className="calendar__aside__header calendar__box">
            <button className="close_popup" onClick={closePopup}>
              <Image
                src="/icons/close-btn.svg"
                width={48}
                height={48}
                alt="close btn"
              />
            </button>
            <Image src="/video/Logo.gif" className="calendar__logotype" alt="logotype" width={90} height={90} />
          </div>
          <div className="calendar__aside__main calendar__box">
            <Image
              src="/images/daniel.png"
              width={100}
              height={100}
              alt="Daniel Galbert SEO of Gamechanger"
              className="calendar__avatar"
            />
            <p className="calendar__name">Даниель Гальберт</p>
            <h3>Показ возможностей</h3>
            <p className="calendar__subtitle">Битрикс 24</p>
            <div className="calendar__aside__info">
              <span>
                <Image
                  src="/icons/clock.svg"
                  width={16}
                  height={16}
                  alt="clock svg"
                />
                30 мин
              </span>
              <span>
                <Image
                  src="/icons/camera.svg"
                  width={14}
                  height={9}
                  alt="camera svg"
                />
                Онлайн демонстрация через Google.meet (установка не требуется)
              </span>
            </div>

            <p className="calendar__description">
              Для заинтересованных в системе это возможность ознакомиться с
              функционалом и подходом к работе, а также обсудить перспективы
              сотрудничества.
            </p>
          </div>
        </div>

        <div className="calendar__main calendar__box">
          <h3>Выберите Дату и Время</h3>
          <DatePicker className="calendar__date-picker" />
          <div className="calendar__main__right">
            <p className="calendar__main__selected-day">
              Среда, 6 Ноября
            </p>
            <button>02:00</button>
            <button>20:00</button>
            <div>
              <input type="time" name="" id="" />
              <button>Дальше</button>
            </div>
            <button>23:00</button>
          </div>
          <div className="calendar__main__footer">
            <span>Часовой пояс</span>
            <div>
              <Image
                src="/icons/earth.svg"
                width={16}
                height={16}
                alt="earth svg icon"
              />{" "}
              Астана (20:17)
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
