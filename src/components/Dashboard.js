import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestionPage from './AnsweredQuestionPage'
import UnansweredQuestionPage from './UnansweredQuestionPage'

class Dashboard extends Component {
  render() {

    return (
      <div>
        <AnsweredQuestionPage />
        <UnansweredQuestionPage />
      </div>
    )
  }
}

export default connect()(Dashboard)