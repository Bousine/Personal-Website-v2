import React from 'react'
import Icon from './icons'

function Footer(){
  return(
    <footer id="footer">
      <div className="icon"><a href="https://www.linkedin.com/in/asif-hasan-063b9b149/" target="_blank"><Icon name="linkedin" width={50} fill="#000000"/></a></div>
      {/* <div className="icon"><a href="https://twitter.com/AsifBousine" target="_blank"><Icon name="twitter" width={50} fill="#000000"/></a></div> */}
      <div className="icon"><a href="mailto:asif21hasan@gmail.com" target="_blank"><Icon name="gmail" width={50} fill="#000000"/></a></div>
      <div className="icon"><a href="https://github.com/Bousine" target="_blank"><Icon name="github" width={50} fill="#000000"/></a></div>
    </footer>
  )
}

export default Footer
