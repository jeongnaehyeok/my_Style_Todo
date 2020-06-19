<template>
  <li class="todo-item">
      <p>{{todo.todo}}</p>
  </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:{
        todo:{
            type:Object
        }
    }
}
</script>