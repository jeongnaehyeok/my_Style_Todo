<template>
  <div id="app">
    <app-header />
    <todo-app />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import TodoApp from './components/TodoApp'

export default {
  name: 'app',
  components:{
    AppHeader,
    TodoApp,
  }
}
</script>

<style>
body{
  width: 100%;
}
#app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
