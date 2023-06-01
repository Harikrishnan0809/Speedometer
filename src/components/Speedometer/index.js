// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed >= 0 && speed < 200) {
      this.setState(oldNum => ({speed: oldNum.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0 && speed <= 200) {
      this.setState(oldNum => ({speed: oldNum.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />

        <h2 className="small-heading">
          Speed is <span>{speed}</span>mph
        </h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="content-container">
          <button onClick={this.onIncrement} className="button1" type="button">
            Accelerate
          </button>
          <button onClick={this.onDecrement} className="button2" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
