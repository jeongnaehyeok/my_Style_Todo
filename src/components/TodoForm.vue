<template>
  <form @submit.prevent="onSubmit">
        <input type="text"
            v-model="todo"
            placeholder="오늘은 무엇을 해야할까?">
        <button type="submit">등록</button>
  </form>
</template>

<script>
export default {
    name: 'TodoForm',
    methods:{
        onSubmit(){
            const { todo } = this
            if(!todo)return false
            const id = new Date().getTime()
            this.$emit('onSubmit', { todo, id })
            this.todo = ''
        }
    },
    data(){
        return{
            todo:'',
        }
    }
}
</script>

<style>

</style>