import { ANSWER_QUESTION, ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const { question } = action
      return {
        ...state,
        [action.question.id]: question.id
      }
    case ANSWER_QUESTION :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne: {
            ...state[action.qid].optionOne,
            votes: action.answer === 'optionOne'
            ? state[action.qid].optionOne.votes.concat([action.authedUser])
            : state[action.qid].optionOne
          },
          optionTwo: {
            ...state[action.qid].optionTwo,
            votes: action.answer === 'optionTwo'
            ? state[action.qid].optionTwo.votes.concat([action.authedUser])
            : state[action.qid].optionTwo
          }
        }
      }
    default:
      return state
  }
}