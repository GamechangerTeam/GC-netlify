'use client'
import BitrixBusinessImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixBusinessImage/BitrixBusinessImage'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
import React from 'react'
import './BitrixCrmInfo.scss'
export default function BitrixCrmInfo() {
    const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
  return (
    <div className='bitrix-crm__container'>
      <div className='bitrix-crm-left'>
    <BitrixInfoTitle title={bitrixInfo.bitrixCrmInfo.title} />
    <BitrixBusinessImage image={bitrixInfo.bitrixCrmInfo.images} />
    </div>
    <div className='bitrix-crm-right'>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmInfo} type={bitrixInfo.bitrixCrmInfo.redInfo}/>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmInfo} type={bitrixInfo.bitrixCrmInfo.blueInfo}/>
    </div>
  </div>
  )
}
