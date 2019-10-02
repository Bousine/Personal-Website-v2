import React from 'react'
import myInfo from './myInfo'
import {Container,Jumbotron,Button} from 'react-bootstrap'

function Homepage(){
  return(
    <div id="myInfo">
      <h1 id="title">{myInfo.title}</h1>
      <h3 id="subtitle">{myInfo.subtitle}</h3>
      <div className="text-center">
        <Button id="learn-more" variant="outline-dark" size="lg">Learn more</Button>
      </div>
    </div>
  )
}

export default Homepage
