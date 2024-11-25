"use click"
import React from 'react'

export default function Popup({className, children}) {
  return (
    <div className={`popup ${className}`} id='modal' >
        <div className="container" data-lenis-prevent="true">{children}</div>
    </div>
  )
}
