<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Tom'
    }
  },
  methods: {
    userClick(){
      this.$router.push("/user/"+this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'lily',
          age: 18
        }
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
