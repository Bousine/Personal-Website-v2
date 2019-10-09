import React from 'react'

function InfoBox(props){
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <span className="close" onClick={()=>props.handleClick()}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}

export default InfoBox
