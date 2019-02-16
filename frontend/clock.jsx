import React from 'react';
import ReactDOM from 'react-dom';
import { clearInterval } from 'timers';

class Clock extends React.Component{ 
  constructor(){
    super();
    this.state = {
      date : new Date()
    }
  }  

  render(){
    return(
      <div>
        <h1 className="clock">The BEST Clock</h1>
        <div className="timedate">
          <h2 className="time">Time: <span>{this.state.date.toLocaleTimeString()}</span> </h2>
          <h2 className="date">Date: <span>{this.state.date.toLocaleDateString()}</span> </h2>
        </div>
      </div>
    )
  }

  tick(){
    this.setState({
      date : new Date()
    })
  }

  componentDidMount(){
    this.handle = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    window.clearInterval(this.handle);
    this.handle = 0;
  }
}




export default Clock;