import React from 'react'

export default props =>
  <form onSubmit={props.handleTodoSubmit}>
    <input
      type='text'
      className="new-todo"
      autoFocus
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      placeholder="What needs to be done?"/>
  </form>
