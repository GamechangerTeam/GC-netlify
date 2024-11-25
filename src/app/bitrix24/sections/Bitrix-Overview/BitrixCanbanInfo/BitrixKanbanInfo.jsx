'use client'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
import React from 'react'
import './BitrixKanbanInfo.scss'
import BitrixInfoImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixInfoImage'
import BitrixKanbanImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixKanbanImage/BitrixKanbanImage'

export default function BitrixKanbanInfo() {
  const bitrixInfo = useBitrixStore((state) => state.bitrixInfo)
  return (
    <div className='bitrix-canban__container'>
        <div className='bitrix-canban__top'>
          <div className='bitrix-canban__left'>
            <BitrixInfoTitle  title={bitrixInfo.bitrixKanbanInfo.title}  />
            </div>
            <div className='bitrix-canban__right'>
            <BitrixInfoListBlock  data={bitrixInfo.bitrixKanbanInfo} type={bitrixInfo.bitrixKanbanInfo.blueInfo}/>
            </div>
        </div>
        <div className='bitrix-canban__bottom'>
          <BitrixKanbanImage image={bitrixInfo.bitrixKanbanInfo.images} />
        </div>
        </div>
  )
}
