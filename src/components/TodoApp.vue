<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
        <todo-list :todos="todos"
            @onDelete="onDelete"/>
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