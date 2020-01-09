<template>
  <div id="getter">
      <h2>getter中的getter</h2>
      <h2>{{$store.getters.doubleCounter}}</h2>
      <h2>{{$store.getters.filterAge(10)}}</h2>
  </div>
</template>

<script>
export default {
    name: 'getter'
}
</script>

<style>

</style>