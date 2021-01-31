import React from 'react'
import {connect} from 'react-redux';

import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

const TodoList = ({todos = []}) => (
    <div className="list-wrapper">
        <TodoForm />
        {todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)}
    </div>
)
const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, null)(TodoList);
