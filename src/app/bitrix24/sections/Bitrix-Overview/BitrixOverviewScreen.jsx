"use client"
import React from 'react'
import "./BitrixOverviewScreen.scss"
import MainTitle from '../../components/bitrix-overview-componets/main-title/MainTitle'
import BitrixTaskInfo from './BitrixTasksInfo/BitrixTaskInfo'
import BitrixKanbanInfo from './BitrixCanbanInfo/BitrixKanbanInfo'
import BitrixBusinessInfo from './BitrixBusinessInfo/BitrixBusinessInfo'
import BitrixCrmInfo from './BitrixCrmInfo/BitrixCrmInfo'
import BitrixContactInfo from './BitrixContactInfo/BitrixContactInfo'
import BitrixCrmFormNote from './BitrixCrmFormNote/BitrixCrmFormNote'
import BitrixCrmFormFeedback from './BitrixCrmFormFeedback/BitrixFormFeedback'

export default function BitrixOverviewScreen() {
  return (
    <div className='bitrix-overview__container'>
        <MainTitle/>
    <BitrixTaskInfo/>
    <BitrixKanbanInfo/>
    <BitrixBusinessInfo/>
    <BitrixCrmInfo/>
    <BitrixContactInfo/>
    <BitrixCrmFormNote/>
    <BitrixCrmFormFeedback/>
        </div>

  )
}
