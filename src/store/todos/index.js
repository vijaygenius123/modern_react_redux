import {ADD_TODO, REMOVE_TODO} from "./actions";
import {v5} from 'uuid'
export const todos = (state = [{title: "Task 1"}], action) => {
    const {type, payload} = action;
    switch (type){
        case ADD_TODO:
            const [title] = payload;
            const newTodo = {
                id: v5(),
                title,
                isCompleted: false
            }
            return state.concat(newTodo)
        case REMOVE_TODO:
            const [id] = payload;
            return state.filter(todo => todo.id !== id)
        default: return  state
    }
}
