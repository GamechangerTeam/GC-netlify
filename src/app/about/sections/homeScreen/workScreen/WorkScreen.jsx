"use client"
import React from 'react'
import "./workScreen.scss"
import AboutCardComponent from '@/app/about/components/workScreen/AboutCardComponent'

export default function WorkScreen() {

    const imageArr = [ 
        {img: "/images/about_card_img1.png", title: "Неограниченное количество полей и автоматических сценариев (роботов)"}, 
        {img: "/images/about_card_img2.png", title: "Полную кастомизацию всех рабочих мест под ваши потребности"}, 
        {img: "/images/about_card_img3.png", title: "Неограниченное количество обращений в службу поддержки в течение периода обслуживания"}, 
        {img: "/images/about_card_img4.png", title: "Индивидуально настроенные панели задач для каждого руководителя"}
    ]

  return (
    <div className='work-screen'>
        <h3 className='work-screen__title'>Почему нужно <br /> работать с нами?</h3>

        <div className="work-screen__cards">
            {imageArr.map((img) => (
                <AboutCardComponent key={img.title} image={img}/>
            )) }
        </div>
    </div>
  )
}
