<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home'}">Notes</router-link>
    <router-link :to="{ name: 'AddNote'}">Write a new note</router-link>

  </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav{
    margin: 40px auto;
    text-align: center;
}
.main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    font-size: 25px;
    color: rgb(192, 24, 66);
}
a.router-link-active {
    border-bottom: 5px solid green;
}

</style>