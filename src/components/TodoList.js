import React from 'react'

const TodoItem = props =>
  <li className={props.isComplete ? "completed" : null}>
    <div className="view">
      <input className="toggle" type="checkbox"
        defaultChecked={props.isComplete} />
      <label>
        {props.name}
      </label>
      <button className="destroy"
        onClick={() => props.handleDelete(props.id)} />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo =>
      <TodoItem key={todo.id} {...todo} handleDelete={props.handleDelete} />)}
  </ul>
