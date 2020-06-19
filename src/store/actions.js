import {
    GET_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './mutations_types'
import api from '../api'

const getTodos = ({commit}) => {
    api.get('/')
        .then(res => {
            commit(GET_TODOS, res.data)
        })
    }

const createTodo = ({ commit }, todo) => {
    api.post('/', { todo })
        .then(res => {
            commit(CREATE_TODO, res.data)
        })
}
const deleteTodo = ({ commit }, id) => {
    api.delete(`/${id}`)
        .then(res => {
            commit(DELETE_TODO, id)
        })
}
const updateTodo = ({ commit }, payload) => {
    const { id, todo } = payload
    api.put(`/${id}`, { todo })
        .then(res => {
            commit(UPDATE_TODO, res.data)
        })
}

export default{
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
}