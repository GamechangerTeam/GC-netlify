"use client"
import Image from 'next/image'
import React from 'react'
import "./aboutCardComponent.scss"

export default function AboutCardComponent({ image }) {
  return (
    <div className='card'>
        <Image width={56} height={56} src={image.img} alt={image.title}/>
        <p>{image.title}</p>
    </div>
  )
}
