import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    banana: 0,
    mangoe: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoe: prevState.mangoe + 1}))
  }

  render() {
    const {mangoe, banana} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <div className="main-card">
            <h1 className="heading">
              Bob ate <span> {mangoe} </span> mangoes
              <span> {banana} </span>
              bananas
            </h1>
            <div className="card">
              <div className="card1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button type="button" onClick={this.onClickEatMango}>
                  Eat Mango
                </button>
              </div>
              <div className="card1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button type="button" onClick={this.onClickEatBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
