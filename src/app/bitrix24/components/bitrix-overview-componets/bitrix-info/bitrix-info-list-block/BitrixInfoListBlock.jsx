
"use client"
import React, { useState,useEffect } from 'react'
import "./BitrixInfoListBlock.scss"
import Image from 'next/image';
export default function BitrixInfoListBlock({data,type}) {
const [isRed,setIsRed] = useState(false)
const [isBlue,setIsBlue] = useState(false)
useEffect(() => {
    if (type.isRed) {
      setIsRed(true);
    }
    if (type.isBlue) {
      setIsBlue(true);
    }
  }, [type]);

  return (
    <div className={`${isRed?'red-background': isBlue?"blue-background":"bitrix-background "} bitrix-overview__list__container`}>
    {isRed && (
        <div className='bitrix-overview__list__block'>
          <h4 className='bitrix-overview__list__title'>{data.redInfo.title}</h4>
          <ul className='bitrix-overview__list'>
            {data.redInfo.info.map((item, index) => (
              <li className='bitrix-overview__list__item' key={index}><Image className='bitrix-icon' src="/icons/cancel.svg" alt='Cancel' width={16} height={16} /><p>{item}</p></li>
            ))}
          </ul>
        </div>
      )}
      {isBlue && (
        <div className='bitrix-overview__list__block'>
          <h4 className='bitrix-overview__list__title'>{data.blueInfo.title}</h4>
          <ul className='bitrix-overview__list'>
            {data.blueInfo.info.map((item, index) => (
              <li className='bitrix-overview__list__item' key={index}><Image className='bitrix-icon' src="/icons/select.svg" alt='Select' width={16} height={16}/><p>{item}</p></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
