<template>
  <navbar/>
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: { Navbar }
  }
</script>

<style>
body {
  background: #e6e3e3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  margin: 0 auto;
  color: #121314;
}

</style>
