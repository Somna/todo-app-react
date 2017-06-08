/**
 * Created by lost on 03-Jun-17.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoList } from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_NORMAL':
      return todos.filter(t => t.priority === 'NORMAL_PRIORITY')
    case 'SHOW_HIGH_PRIORITY':
      return todos.filter(t => t.priority === 'HIGH_PRIORITY')
    case 'SHOW_VERY_HIGH_PRIORITY':
      return todos.filter(t => t.priority === 'VERY_HIGH_PRIORITY')
    case 'SHOW_COMPLETED':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchProps
)(TodoList)

export default VisibleTodoList;