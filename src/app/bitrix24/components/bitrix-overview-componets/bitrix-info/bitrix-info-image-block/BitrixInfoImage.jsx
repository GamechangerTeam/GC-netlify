import Image from 'next/image'
import React from 'react'
import "./BitrixInfoImage.scss"
export default function BitrixInfoImage({ image }) {
    return (
      <div className='bitrix-overview__image bitrix-background'>
        {/* <Image objectFit='contain' className='test'  fill  src={image.imageSrc} alt={image.alt} /> */}
        {/* <img className='tasks-image' src={image.imageSrc[0]} alt={image.alt}  />
        <img className='mobile-image' src={image.imageSrc[1]} alt={image.alt}  /> */}
        <img className='test-tasks ' src={image.imageSrc} alt={image.alt} />
      </div>
    )
  }