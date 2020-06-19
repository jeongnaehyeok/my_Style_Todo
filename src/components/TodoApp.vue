<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
        <todo-list :todos="todos"/>
    </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'TodoApp',
    components:{
        TodoForm,
        TodoList
    },
    methods:{
        onSubmit(todo){
            this.createTodo(todo)
        },
        ...mapActions([
            'getTodos', 
            'createTodo',
            'deleteTodo',
            'updateTodo'])
    },
    computed:{
        ...mapState(['todos'])
    },
    created(){
        this.getTodos()
    }
}
</script>

<style>
.todo-app{
    width: 640px;
}
</style>