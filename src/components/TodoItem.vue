<template>
  <li class="todo-item">
      <p>{{todo.todo}}</p>
      <button @click="onDelete">삭제</button>
  </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:{
        todo:{
            type:Object
        }
    },
    methods:{
        onDelete(){
            const id= this.todo.id
            this.$emit('onDelete', id)
        }
    }
}
</script>