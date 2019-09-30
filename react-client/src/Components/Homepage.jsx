import React from 'react'
import myInfo from './myInfo'
import {Container,Jumbotron} from 'react-bootstrap'

function Homepage(){
  return(
    <div id="myInfo">
      <h1 id="title">{myInfo.title}</h1>
      <p>{myInfo.firstp}</p>
      <p>{myInfo.secondp}</p>
    </div>
  )
}

export default Homepage
