import React, {useState} from 'react';
import {connect} from 'react-redux'

import {addTodo} from "../store/todos/actions";

const TodoForm = ({addTask}) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit")
        addTask(title)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <button className="btn btn-submit">Add Todo</button>
        </form>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addTask: title => dispatch(addTodo(title))
})

export default connect(null,mapDispatchToProps)(TodoForm);
