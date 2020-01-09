<template>
  <div id="app">
    <h2>app中的</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.over20}}</h2>
    <button @click="appAdd">+</button>
    <button @click="appSub">-</button>
    <button @click="appAddNum(5)">+5</button>
    <button @click="appAddNum(10)">+10</button>
    <button @click="appAddJohn">添加一个john</button>
    <mutation></mutation>
  </div>
</template>

<script>

import mutation from './components/mutation'

export default {
  name: 'App',
  methods: {
    appAdd(){
      return this.$store.commit('add')
    },
    appSub(){
      return this.$store.commit('sub')
    },
    appAddNum(num){
      this.$store.commit('addNum',num)
    },
    appAddJohn(){
      this.$store.commit('addJohn')
    }
  },
  components: {
    mutation
  }
}
</script>

<style>
</style>
