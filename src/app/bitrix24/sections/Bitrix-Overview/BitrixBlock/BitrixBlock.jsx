import BitrixKanbanImage from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixKanbanImage";
import BitrixInfoListBlock from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock";
import React, { useRef, useEffect } from "react";
import "./BitrixBlock.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function BitrixBlock({ data, id }) {
  const listRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const listElement = listRef.current;
    const imgElement = imgRef.current;

    // Анимация для списка
    gsap.from(listElement, {
      opacity: 0,
      filter: "blur(10px)",
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: listElement,
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    // Анимация для изображения
    gsap.from(imgElement, {
      opacity: 0,
      filter: "blur(10px)",
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imgElement,
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bitrix-block__container" id={id}>
      <div ref={listRef}>
        <BitrixInfoListBlock
          title={data.title}
          data={data}
          type={data.blueInfo}
        />
      </div>
      <div ref={imgRef}>
        <BitrixKanbanImage image={data.images} />
      </div>
    </div>
  );
}
