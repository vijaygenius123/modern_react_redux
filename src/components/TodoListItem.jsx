import React from 'react'

const TodoListItem = ({todo}) => (
    <div className="todo-item-container">
        <h3>{todo.title}</h3>
        <div className="btn-container">
            <button className="btn btn-complete">Mark As Completed</button>
            <button className="btn btn-remove">Remove</button>
        </div>
    </div>
)


export default TodoListItem;
