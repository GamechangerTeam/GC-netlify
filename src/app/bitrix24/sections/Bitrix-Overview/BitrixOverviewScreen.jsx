"use client"
import React from 'react'
import "./BitrixOverviewScreen.scss"
import MainTitle from '../../components/bitrix-overview-componets/main-title/MainTitle'
import BitrixTaskInfo from './BitrixTasksInfo/BitrixTaskInfo'
import BitrixKanbanInfo from './BitrixCanbanInfo/BitrixKanbanInfo'

export default function BitrixOverviewScreen() {
  return (
    <div className='bitrix-overview__container'>
        <MainTitle/>
    <BitrixTaskInfo/>
    <BitrixKanbanInfo/>
        </div>

  )
}
