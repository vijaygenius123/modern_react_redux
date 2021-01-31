import {ADD_TODO, REMOVE_TODO} from "./actions";
import {v4} from 'uuid'
export const todos = (state = [], action) => {
    const {type, payload} = action;
    switch (type){
        case ADD_TODO:
            const {title} = payload;
            const newTodo = {
                id: v4(),
                title,
                isCompleted: false
            }
            return state.concat(newTodo)
        case REMOVE_TODO:
            const {id} = payload;
            return state.filter(todo => todo.id !== id)
        default: return  state
    }
}
