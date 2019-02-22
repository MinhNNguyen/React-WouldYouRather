export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_QUESTION_TO_USER = 'ADD_ANSWER_QUESTION_TO_USER'
export const ADD_QUESTION_CREATED = 'ADD_QUESTION_CREATED'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnsweredQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER_QUESTION_TO_USER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionCreated( question, authedUser) {
  return {
    type: ADD_QUESTION_CREATED,
    question,
    authedUser
  } 
}