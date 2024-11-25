'use client'
import BitrixBusinessImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixBusinessImage/BitrixBusinessImage'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
import React from 'react'
import './BitrixContactInfo.scss'
export default function BitrixContactInfo() {
    const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
  return (
    <div className='bitrix-contact__container'>
    <div className='bitrix-contact-left'>
  <BitrixInfoTitle title={bitrixInfo.bitrixContactInfo.title} />
  <BitrixBusinessImage image={bitrixInfo.bitrixContactInfo.images} />
  </div>
  <div className='bitrix-contact-right'>
    <BitrixInfoListBlock data={bitrixInfo.bitrixContactInfo} type={bitrixInfo.bitrixContactInfo.redInfo}/>
    <BitrixInfoListBlock data={bitrixInfo.bitrixContactInfo} type={bitrixInfo.bitrixContactInfo.blueInfo}/>
  </div>
</div>
  )
}
