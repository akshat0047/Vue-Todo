<template>
    <div>
        <div class="col-12 col-md-3 col-lg-3 todo" v-bind:key="todo.id" v-for="todo in todos">
           <TodoItem v-bind:todo="todo" v-on:toggle="$emit('toggle', todo.id)" 
                     v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>
    .todo{
        position: relative;
        padding-top: 3%;
    }
</style>