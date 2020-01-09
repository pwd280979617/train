<template>
  <div id="app">
    <h2>app中的action</h2>
    <h2>{{$store.state.students}}</h2>
    <button @click="appChangeAge(30)">更改年龄</button>
    <action></action>
  </div>
</template>

<script>

import action from './components/actiion'

export default {
  name: 'App',
  components: {
    action
  },
  methods: {
    appChangeAge(age){
      this.$store.dispatch('aChange',age)
    }
  },
}
</script>

<style>
</style>
