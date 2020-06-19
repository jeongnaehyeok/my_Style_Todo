<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
        <todo-list :todos="todos"
            @onDelete="onDelete"
            @updateTodo="updateTodo"/>
    </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import api from '../api'

export default {
    name: 'TodoApp',
    components:{
        TodoForm,
        TodoList
    },
    methods:{
        onSubmit(todo){
            api.post('/', { todo })
                .then(res => {
                    this.todos.push(res.data)
                })
        },
        onDelete(id){
            const targetIndex = this.todos.findIndex(v => v.id === id)
            api.delete(`/${id}`)
                .then(res => {
                    this.todos.splice(targetIndex, 1)
                })
        },
        updateTodo(payload){
            const { id, todo } = payload
            const targetIndex = this.todos.findIndex(v => v.id === id)
            const targetTodo = this.todos[targetIndex]
            api.put(`/${id}`, { todo })
                .then(res => {
                    this.todos.splice(targetIndex, 1, {...targetTodo, todo})
                })
        }
    },
    data(){
        return{
            todos: [],
        }
    },
    created(){
        api.get('/')
            .then(res => {
                this.todos = res.data;
            })
    }
}
</script>

<style>
.todo-app{
    width: 640px;
}
</style>