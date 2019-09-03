import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(){
    super();
    this.state={
      clock: 0
    };
   
  };


 ticker = () => {
   this.setState({
     clock: new Date() - Date.now()
     
   })
 }

 componentDidMount() {
    this.timer = setInterval(this.ticker, 1000)
 }
  render() {
    const {clock} = this.state.clock;
    console.log(clock);
    
    
    return (
      <div>
        <h1>{this.state.clock}</h1>
      </div>
    )
  }
}


