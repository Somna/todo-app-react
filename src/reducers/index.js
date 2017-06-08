/**
 * Created by lost on 03-Jun-17.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers(
  todo,
  visibilityFilter,
  config
);

export default todoApp;