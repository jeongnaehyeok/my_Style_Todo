<template>
  <li class="todo-item">
        <p @click="editShow" v-if="!edidToggle">{{todo.todo}}</p>
        <input v-else
            type="text"
            :value="todo.todo"
            @keydown.enter="updateTodo"
            @blur="handleBlur"
            ref="todo"
        />
        <button v-if="!edidToggle" @click="onDelete"><i class="fa fa-times" aria-hidden="true"></i></button>
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
        },
        editShow(){
            this.edidToggle = !this.edidToggle
            if(this.edidToggle){
                this.$nextTick(()=>{
                    this.$refs.todo.focus()
                })
            }
        },
        updateTodo(e){
            const id = this.todo.id
            const todo = e.target.value.trim()
            this.$emit('updateTodo', { id, todo })
            this.handleBlur()
        },
        handleBlur(){
            this.edidToggle = false
        }
    },
    data(){
        return{
            edidToggle: false,
        }
    }
}
</script>

<style scoped>
.todo-item{
    width: 100%;
    min-height: 50px;
    display: flex;
    box-shadow: 3px 3px 3px var(--gray);
    align-items: center;
    background-color: white;
    padding: 10px;
}
.todo-item p{
    max-width: 100%;
    margin: 0;
}
.todo-item input { 
    padding: 0;
    font-size: 1rem;
    border: 0;
}
.todo-item button{
    border: 0;
    outline: 0;
    background: none;
}
.fa-times{
    color: red;
}
</style>