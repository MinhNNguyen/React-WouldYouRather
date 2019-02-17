import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'


class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    if (e.target.id === 'optionOne') {
      this.setState(() => ({
        ...this.state,
        optionOne: text
      }))
    }
    else {
      this.setState(() => ({
        ...this.state,
        optionTwo: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: id ? false : true,
    }))
  }

  render() {

    const { optionOne, optionTwo } = this.state

    return (
      <div className="question">
        <div>
          <h2>
            Create New Question
          </h2>
        </div>
        <div>
          <form className='new-question' onSubmit={this.handleSubmit}>
            <h4>Would you rather ...</h4>
            <input
              id="optionOne"
              className="option"
              type="text"
              value={optionOne}
              onChange={this.handleChange}
               />
            <p>OR</p>
            <input
              id="optionTwo"
              className="option"
              type="text"
              value={optionTwo}
              onChange={this.handleChange}
              />
            <button 
              type="submit"
              disabled={optionOne === '' || optionTwo === ''}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)