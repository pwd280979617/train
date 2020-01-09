<template>
  <div id="app">
    <h2>app中的getter</h2>
    <h2>{{$store.getters.doubleCounter}}</h2>
    <h2>{{$store.getters.filterAge(20)}}</h2>
    <getter></getter>
  </div>
</template>

<script>

import getter from './components/getter'

export default {
  name: 'App',
  components: {
    getter
  }
}
</script>

<style>
</style>
