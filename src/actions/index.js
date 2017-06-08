/**
 * Created by lost on 02-Jun-17.
 */
let nextTodoId = localStorage.lastId || 0
export const addTask = ({title, text, completedDate, priority}) => {
  localStorage.lastId = localStorage.lastId ? localStorage.lastId + 1 : 1;
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    text,
    completedDate,
    priority
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}