import React from 'react'
import TodoListItem from "./TodoListItem";
import {connect} from 'react-redux';
const TodoList = ({todos = []}) => (
    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)
const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, null)(TodoList);
