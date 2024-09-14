<template>
    <div id="app">
        <Home></Home>
    </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
    name: 'App',
    components: {
        Home,
    },
};
</script>

<style>
@font-face {
    font-family: 'sa-digital-number';
    src: url(' ./assets/font/DigitalNumbers-Regular.eot');
}
@font-face {
    font-family: 'sa-digital-number';
    src: url('./assets/font/DigitalNumbers-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    margin: 0;
}
</style>
