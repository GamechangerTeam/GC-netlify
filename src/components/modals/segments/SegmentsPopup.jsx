"use client";
import React from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./segmentsPopup.scss";
import Image from "next/image";
import Link from "next/link";
export default function SegmentsPopup() {
  const {closePopup } = useModal();

  const segments = [
    {
      link: "/segments?name=rent",
      icon: "/icons/segments_popup/key.svg",
      name: "Аренда",
    },
    {
      link: "/segments?name=carService",
      icon: "/icons/segments_popup/car.svg",
      name: "Автосервис",
    },
    {
      link: "/segments?name=hr",
      icon: "/icons/segments_popup/management.svg",
      name: "HR",
    },
    {
      link: "/segments?name=education",
      icon: "/icons/segments_popup/mortarboard.svg",
      name: "Образование",
    },
    {
      link: "/segments?name=wholesale",
      icon: "/icons/segments_popup/department.svg",
      name: "Отдел продаж",
    },
    {
      link: "/segments?name=construction",
      icon: "/icons/segments_popup/worker.svg",
      name: "Строительство",
    },
    {
      link: "/segments?name=marketing",
      icon: "/icons/segments_popup/digital-marketing.svg",
      name: "Маркетинг",
    },
    {
      link: "/segments?name=medicine",
      icon: "/icons/segments_popup/drugs.svg",
      name: "Медицина",
    },
    {
      link: "/segments?name=",
      icon: "/icons/segments_popup/property.svg",
      name: "Продажа недвижимости",
    },
    {
      link: "/segments?name=production",
      icon: "/icons/segments_popup/manufacture.svg",
      name: "Производство",
    },
    {
      link: "/segments?name=retail",
      icon: "/icons/segments_popup/shopping-bag.svg",
      name: "Розничная торговля",
    },
    {
      link: "/segments?name=management",
      icon: "/icons/segments_popup/planning.svg",
      name: "Управление",
    },
  ];

  return (
    <Popup className="segments" popupName="segments">
      <div className="segments__header">
        <button className="close_popup" onClick={closePopup}>
          <Image
            src="/icons/close-btn.svg"
            width={64}
            height={64}
            alt="close btn"
          />
        </button>
        <h2>
          Выберите свою нишу и получите <br />{" "}
          <span className="gold_text"> выгодное предложение</span>
        </h2>
        <p className="segments__subtitle">
          Инструменты для бизнеса от 100&nbsp;000₸
        </p>
      </div>
      <ul className="segments__main">
        {segments.map((item, index) => (
          <li key={index}>
            <Link href={item.link} onClick={closePopup}>
              <Image src={item.icon} width={48} height={48} alt={item.name} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Popup>
  );
}
