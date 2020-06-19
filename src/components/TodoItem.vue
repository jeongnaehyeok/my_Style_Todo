<template>
  <li class="todo-item">
        <p @click="editShow">
            <template v-if="!edidToggle">{{todo.todo}}</template>
            <input v-else
                type="text"
                :value="todo.todo"
                @keydown.enter="updateTodo"
                @blur="handleBlur"
                ref="todo"
                />
        </p>
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