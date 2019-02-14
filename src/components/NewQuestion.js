import React, { Component } from 'react'
import { connect } from 'react-redux'


class NewQuestion extends Component {
  render() {
    return (
      <div className="question">
        <div>
          <h2>
            Create New Question
          </h2>
        </div>
        <div>
          {/* <form className='new-question'>
            <h4>Would you rather ...</h4>
            <input class="option" type="text" />
            <p>OR</p>
            <input class="option" type="text" />
            <button type="submit" value="submit-new-question">Submit</button>
          </form> */}
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)