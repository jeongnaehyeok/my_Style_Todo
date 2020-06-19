<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
    </div>
</template>

<script>
import TodoForm from './TodoForm'

export default {
    name: 'TodoApp',
    components:{
        TodoForm
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