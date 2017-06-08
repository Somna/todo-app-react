/**
 * Created by lost on 02-Jun-17.
 */
import { Task } from './Task'
import React from "react";

export const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Task key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)