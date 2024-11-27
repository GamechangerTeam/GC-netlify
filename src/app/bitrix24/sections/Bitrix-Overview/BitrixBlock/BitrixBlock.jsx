import BitrixKanbanImage from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixKanbanImage";
import BitrixInfoListBlock from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock";
import React from "react";
import "./BitrixBlock.scss";
export default function BitrixBlock({ data }) {
  return (
    <div className="bitrix-block__container">
      <BitrixInfoListBlock
        title={data.title}
        data={data}
        type={data.blueInfo}
      />
      <BitrixKanbanImage image={data.images} />
    </div>
  );
}
