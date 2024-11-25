'use client'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
import React from 'react'
import './BitrixBusinessInfo.scss'
import BitrixBusinessImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixBusinessImage/BitrixBusinessImage'
export default function BitrixBusinessInfo() {
  const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
  return (
    <div className='bitrix-business__container'>
      <div className='bitrix-business-left'>
    <BitrixInfoTitle title={bitrixInfo.bitrixBusinessInfo.title} />
    <BitrixBusinessImage image={bitrixInfo.bitrixBusinessInfo.images} />
    </div>
    <div className='bitrix-business-right'>
      <BitrixInfoListBlock data={bitrixInfo.bitrixBusinessInfo} type={bitrixInfo.bitrixBusinessInfo.redInfo}/>
      <BitrixInfoListBlock data={bitrixInfo.bitrixBusinessInfo} type={bitrixInfo.bitrixBusinessInfo.blueInfo}/>
    </div>
  </div>
  )
}
