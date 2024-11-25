"use client"
import BitrixInfoImage from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixInfoImage'
import BitrixInfoTitle from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-title-block/BitrixInfoTitle'
import useBitrixStore from '@/components/hooks/use-bitrix-store'
import React from 'react'
import "./BitrixTaskInfo.scss"
import BitrixInfoListBlock from '@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock'
export default function BitrixTaskInfo() {
    
    const bitrixInfo = useBitrixStore((state)=>state.bitrixInfo)
   
    
  
  return (
    <div className='bitrix-task__container'>
      <div className='bitrix-task-left'>
    <BitrixInfoTitle title={bitrixInfo.bitrixTaskInfo.title} />
    <BitrixInfoImage image={bitrixInfo.bitrixTaskInfo.images} />
    </div>
    <div className='bitrix-task-right'>
      <BitrixInfoListBlock data={bitrixInfo.bitrixTaskInfo} type={bitrixInfo.bitrixTaskInfo.redInfo}/>
      <BitrixInfoListBlock data={bitrixInfo.bitrixTaskInfo} type={bitrixInfo.bitrixTaskInfo.blueInfo}/>
    </div>
  </div>
  )
}
