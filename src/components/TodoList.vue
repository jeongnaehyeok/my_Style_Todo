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
            this.$emit('onDelete', id)
        },
        updateTodo(payload){
            this.$emit('updateTodo', payload)
        }
    }
}
</script>

<style>

</style>