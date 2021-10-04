import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedSeconds: 0,
  }

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedSeconds: prevState.elapsedSeconds + 1,
      }))
    }, 1000)

    this.stopTimer = () => {
      clearInterval(intervalId)
    }
  }

  resetTimer = () => {
    this.setState({elapsedSeconds: 0})
  }

  renderDisplayTime = () => {
    const {elapsedSeconds} = this.state
    let minutes = 0
    let seconds = 0
    minutes = Math.floor(elapsedSeconds / 60)
    seconds = Math.floor(elapsedSeconds % 60)

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${displayMinutes}:${displaySeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1>StopWatch</h1>
          <div className="timer-container">
            <p className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-icon"
              />
              Timer
            </p>
            <h1 className="timer">{this.renderDisplayTime()}</h1>
            <div className="buttons-container">
              <button className="btn start-btn" onClick={this.startTimer}>
                Start
              </button>
              <button className="btn stop-btn" onClick={this.stopTimer}>
                Stop
              </button>
              <button className="btn reset-btn" onClick={this.resetTimer}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
