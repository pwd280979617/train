<template>
  <div>
    <h2>我是档案</h2>
    <p>我是档案的内容</p>
    <p>{{$route.query.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style>

</style>