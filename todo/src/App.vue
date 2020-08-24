<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layouts/Header';

export default {
  name: "app",
  components: {
    Header
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background: linear-gradient(to bottom, rgba(251,251,251, 0.3) 0%, rgba(251,251,251, 0.4) 60%, rgba(251,251,251, 0.5) 100%), url('./assets/bg-home.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
