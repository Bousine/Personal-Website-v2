import React from 'react'
import myInfo from './myInfo'

function InfoBox(){
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <p>{myInfo.firstp}</p>
        <p>{myInfo.secondp}</p>
      </div>
    </div>
  )
}

export default InfoBox
