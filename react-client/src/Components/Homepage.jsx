import React from 'react'
import myInfo from './myInfo'
import InfoBox from './InfoBox'
import {Container,Jumbotron,Button} from 'react-bootstrap'

class Homepage extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    var modal = document.getElementsByClassName("modalContainer")[0];
    var btn = document.getElementsByClassName("learn-more")[0];
    var body = document.getElementsByTagName("BODY")[0];
    btn.onclick = function() {
      modal.style.display = "block";
      body.style.overflow = "hidden";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
      }
    }
  }


  render(){
    return(
      <div id="myInfo">
        <h1 id="title">{myInfo.title}</h1>
        <h3 id="subtitle">{myInfo.subtitle}</h3>
        <div className="text-center">
          <Button className="learn-more" variant="outline-dark" size="lg">Learn more</Button>
        </div>
        <InfoBox/>
      </div>
    )
  }
}

export default Homepage
