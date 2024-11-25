'use client'
import React from 'react'
import './BitrixFormFeedback.scss'
import BitrixBusinessImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixBusinessImage/BitrixBusinessImage'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
export default function BitrixCrmFormFeedback() {
  const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
  return (
    <div className='bitrix-crm__container'>
      <div className='bitrix-crm-left'>
    <BitrixInfoTitle title={bitrixInfo.bitrixCrmFormFeedbackInfo.title} />
    <BitrixBusinessImage image={bitrixInfo.bitrixCrmFormFeedbackInfo.images} />
    </div>
    <div className='bitrix-crm-right'>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmFormFeedbackInfo} type={bitrixInfo.bitrixCrmFormFeedbackInfo.redInfo}/>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmFormFeedbackInfo} type={bitrixInfo.bitrixCrmFormFeedbackInfo.blueInfo}/>
    </div>
  </div>)
}
