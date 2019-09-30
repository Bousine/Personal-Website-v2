import React from 'react'

function NavButton(props){
  return (
    <div className="navButton">
      <button type="button" className="btn btn-primary">{props.text}</button>
    </div>
  )
}

export default NavButton
