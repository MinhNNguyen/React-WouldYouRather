import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div>
        <div> 
          <h3>
            User asks: 
          </h3>
        </div>
        <div>
          <img 
            src=''
            alt=''
            className=''
          />
          <div className=''>
            <h1>Would You Rather ..</h1>
            <form>
              <input type="radio" name="answer" value="o1" />Option 1 <br />
              <input type="radio" name="answer" value="o2" />Option 2 <br />
              <button type="submit" name="submit">Submit</button> 
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Question