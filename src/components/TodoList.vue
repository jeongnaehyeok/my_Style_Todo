<template>
  <div class="todo-list">
      <ul>
          <todo-item v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            @onDelete="onDelete"
            @updateTodo="updateTodo"/>
      </ul>
      
  </div>
</template>

<script>
import TodoItem from "./TodoItem"
import { mapActions } from 'vuex'

export default {
    name: "TodoList",
    props:{
        todos:{
            type:Array,
        }
    },
    components:{
        TodoItem
    },
    methods:{
        onDelete(id){
            this.deleteTodo(id)
        },
        updateTodo(payload){
            this.updateTodo(payload)
        },
        ...mapActions([
            'deleteTodo',
            'updateTodo'])
    }
}
</script>

<style scoped>
.todo-list{
    width: 100%;
}
ul{
    width: 100%;
    padding: 0;
}
li{
    list-style: none;
}
</style>