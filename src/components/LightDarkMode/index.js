import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDefault: true,
  }

  changeTheButtonText = () => {
    this.setState(state => ({isDefault: !state.isDefault}))
  }

  changeTheButton = () => {
    const {isDefault} = this.state
    return isDefault ? 'Light Mode' : 'Dark Mode'
  }

  changeTheBackground = () => {
    const {isDefault} = this.state
    return isDefault ? 'black' : 'white'
  }

  render() {
    const buttonText = this.changeTheButton()
    const BackGroundColor = this.changeTheBackground()
    return (
      <div className="bg-container">
        <div className={`inside-container ${BackGroundColor}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.changeTheButtonText}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
