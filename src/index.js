import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
