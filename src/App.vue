<template>
  <div class="nav">
    <router-link to="/">Login</router-link><br />
    <router-link to="/register">Register</router-link><br />
    <router-link to="/home">Home</router-link><br />
    <router-link to="/profile">Profile</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
}
</style>
