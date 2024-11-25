'use client'
import React from 'react'
import './BitrixCrmFormNote.scss'
import BitrixBusinessImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixBusinessImage/BitrixBusinessImage'
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
export default function BitrixCrmFormNote() {
  const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
  return (
    <div className='bitrix-crm__container'>
      <div className='bitrix-crm-left'>
    <BitrixInfoTitle title={bitrixInfo.bitrixCrmFormNoteInfo.title} />
    <BitrixBusinessImage image={bitrixInfo.bitrixCrmFormNoteInfo.images} />
    </div>
    <div className='bitrix-crm-right'>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmFormNoteInfo} type={bitrixInfo.bitrixCrmFormNoteInfo.redInfo}/>
      <BitrixInfoListBlock data={bitrixInfo.bitrixCrmFormNoteInfo} type={bitrixInfo.bitrixCrmFormNoteInfo.blueInfo}/>
    </div>
  </div>)
}
