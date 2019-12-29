<template>
  <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabbar',
}
</script>

<style>

  #tabbar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #f2f2f2;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2)
  }
</style>