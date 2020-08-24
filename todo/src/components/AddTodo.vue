<template>
    <div>
        <form class="add-form text-center" @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo..."><br/>
            <input type="submit" value="Add Todo" class="btn">
        </form>
    </div>
</template>

<script>
//import uuid from 'uuid';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                //id: uuid.v4(),
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
        position: fixed;
        display: block;
        margin: auto;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background-color: transparent !important;
        box-shadow: 0 0 5px 2px rgba(0,0,0,0.2);
        padding: 1.5%;
    }
    input{
        margin: 10px;
    }
    input[type="text"] {
        border: none;
        border-bottom: 1px solid rgb(184, 177, 177);
        padding: 8px;
        transition: all 0.3s;
        background-color: rgba(255, 255, 255, 0.568);
    }
    input[type="text"]:focus{
        border-bottom: 1px solid rgb(22, 22, 22);
        background-color: rgba(255, 255, 255, 0.932);
    }
    input[type="submit"] {
        border: 2px solid rgb(32, 31, 31);
    }
    input[type="submit"]:hover{
        background-color: rgb(32, 31, 31);
        color: white;
    }
</style>