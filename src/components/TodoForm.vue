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
            this.$emit('onSubmit', todo)
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

<style scoped>
form{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    box-shadow: 3px 3px 3px var(--gray);
}
input[type="text"] { 
    width: 80%; 
    border-right: 0;
}
button[type='submit']{
    width: 20%;
    border-radius: 0;
    border: 1px solid var(--black_sub); 
    outline: none;
}
button[type='submit']:hover{
    background-color: var(--white_sub);
    cursor: pointer;
}

</style>