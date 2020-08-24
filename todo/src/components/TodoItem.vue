<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <div @click="$emit('del-todo', todo.id)" class="del">&#10006;</div>
        <p>{{todo.title}}</p>
        <input  type="checkbox" v-on:change="$emit('toggle', todo.id)" v-bind:checked="todo.completed">
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');

.todo-item {
    font-family: 'Ubuntu', sans-serif;
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 15px;
    box-shadow: 0 0 4px 3px rgba(0,0,0,0.2);
    border-radius: 10px;
    color: white;
    font-size: 0.8em;
    font-weight: 600;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    position: relative;
    background: rgb(20, 18, 18);
    text-align: center;
    font-size: 0.7em;
    width: 20px;
    padding: 2px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    float: right; 
    transition: all 0.3s;
  }

    .del:hover{
        background-color: rgb(255, 255, 255);
        color: rgb(19, 18, 18);
    }
</style>