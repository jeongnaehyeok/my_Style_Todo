<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
        <todo-list :todos="todos"/>
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

</style>