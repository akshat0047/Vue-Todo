<template>
  <div id="app">
    <Header />
    <Todos class="row" v-bind:todos="todos" v-on:toggle="markComplete" v-on:del-todo="deleteTodo"/>
    <AddTodo class="todo-box" v-on:add-todo="addTodo" />
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data(){
    return{
     todos: []
    }
  },
  methods: {
    markComplete(id){
      let t = this.todos.find(todo => todo.id === id)
      t.completed = !t.completed;
    },
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      
      axios.post('https://jsonplaceholder.typicode.com/todos', { 
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
  }
}
</script>

<style>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .row{
    margin: 0px;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 1%;
  }
</style>
