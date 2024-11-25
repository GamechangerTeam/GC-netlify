"use click"
import React from 'react'
import { useModal } from '../hooks/use-modal-store'

export default function Popup({className, children, popupName}) {
  const {isOpen, name} = useModal()
  const isModalOpen = isOpen && name === popupName ? "active" : "";
  

  return (
    <div className={`popup ${isModalOpen} ${className}`}>
        <div className="container" data-lenis-prevent="true">{children}</div>
    </div>
  )
}
