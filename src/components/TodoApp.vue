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

export default {
    name: 'TodoApp',
    components:{
        TodoForm,
        TodoList
    },
    methods:{
        onSubmit(payload){
            this.todos.push(payload)
            this.storeTodo()
        },
        storeTodo(){
            const todoToString = JSON.stringify(this.todos)
            localStorage.setItem('todos', todoToString)
        },
        onDelete(id){
            const targetIndex = this.todos.findIndex(v => v.id === id)
            this.todos.splice(targetIndex, 1)
            this.storeTodo()
        },
        updateTodo(payload){
            const { id, todo } = payload
            const targetIndex = this.todos.findIndex(v => v.id === id)
            const targetTodo = this.todos[targetIndex]
            this.todos.splice(targetIndex, 1, {...targetTodo, todo})
            this.storeTodo()
        }
    },
    data(){
        return{
            todos: [],
        }
    },
    created(){
        this.todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    }
}
</script>

<style>
.todo-app{
    width: 640px;
}
</style>