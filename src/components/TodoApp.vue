<template>
    <div class="todo-app">
        <todo-form @onSubmit="onSubmit"/>
        <todo-list />
    </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { mapActions } from 'vuex'

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
            'createTodo'
            ])
    },
}
</script>

<style>
.todo-app{
    width: 640px;
}
</style>