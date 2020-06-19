import {
    GET_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    UPDATE_TODO,
} from './mutations_types'

export default{
    [GET_TODOS](state, payload){
        state.todos = payload
    },
    [CREATE_TODO](state, payload){
        state.todos.push(payload)
    },
    [DELETE_TODO](state, id){
        const targetIndex = state.todos.findIndex(v => v.id === id)
        state.todos.splice(targetIndex, 1)
    },
    [UPDATE_TODO](state, payload){
        const { id, todo } = payload
        const targetIndex = state.todos.findIndex(v => v.id === id)
        const targetTodo = state.todos[targetIndex]
        state.todos.splice(targetIndex, 1, {...targetTodo, todo})
    }
}