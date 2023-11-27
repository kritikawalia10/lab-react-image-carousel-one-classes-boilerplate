import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state = {
        count :0
    }
  }
 more=()=>{
    if(this.state.count<2){
        this.setState({count : this.state.count+1})
    } else if(this.state.count>=2){
        this.setState({count : 0})
    }
  }
  less=()=>{
    if(this.state.count>0){
        this.setState({count : this.state.count-1})
    } else if(this.state.count<=0){
        this.setState({count:2})
    }
  }
  
  render(){
    return(
    <>
    <div className="contain">
        <div className="left" onClick={this.less}>
            <ArrowBackIosIcon/>
        </div>
        <img src={images[this.state.count].img} alt="" />
        <div className="right" onClick={this.more}>
            <ArrowForwardIosIcon/>
        </div>
    </div>
      <div className="title">
        {images[this.state.count].title}
    </div>
    <div className="text">
        {images[this.state.count].subtitle}
    </div>
    </>
    )
  }
}

export default Carousel;
