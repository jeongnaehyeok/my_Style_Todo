<template>
  <div class="todo-list">
      <ul>
          <todo-item v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"/>
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
    }
}
</script>

<style>

</style>