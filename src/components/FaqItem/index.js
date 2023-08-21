// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswerText = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickButton = () => {
    this.prevState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const imageAltText = isActive ? 'minus' : 'plus'

    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <button className="btn" type="button" onClick={this.onClickButton}>
        <img src={imageUrl} alt={imageAltText} className="img" />
      </button>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq

    return (
      <li className="question-container">
        <div className="question-more-container">
          <h1 className="question">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
