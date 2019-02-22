import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class QuestionPage extends Component {
  render() {
    const { id, isAnswered } = this.props
    
    return (
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto dashboard">
        { isAnswered === true
            ? <AnsweredQuestion id={id}/>
            : <UnansweredQuestion id={id}/>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users}, props) {
  const { id } = props.match.params
  const isAnswered = Object.keys(users[authedUser].answers).includes(id)
  return {
    id,
    isAnswered
  }
}

export default connect(mapStateToProps)(QuestionPage)