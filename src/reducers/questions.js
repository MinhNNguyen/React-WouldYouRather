import { SUBMIT_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SUBMIT_ANSWER :
      return state
    case ADD_QUESTION :
      return state
    default:
      return state
  }
}