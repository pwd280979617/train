<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbarItem path='/home'>
        <img slot="tabbarIcon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="tabbarIconAct" src="./assets/img/tabbar/home1.svg" alt="">
        <div slot="tabbarText">首页</div>
      </tabbarItem>
      <tabbarItem path='/search'>
        <img slot="tabbarIcon" src="./assets/img/tabbar/search.svg" alt="">
        <img slot="tabbarIconAct" src="./assets/img/tabbar/search1.svg" alt="">
        <div slot="tabbarText">搜索</div></tabbarItem>
      <tabbarItem path='/xiangmu'>
        <img slot="tabbarIcon" src="./assets/img/tabbar/xiangmu.svg" alt="">
        <img slot="tabbarIconAct" src="./assets/img/tabbar/xiangmu1.svg" alt="">
        <div slot="tabbarText">项目</div></tabbarItem>
      <tabbarItem path='/admin'>
        <img slot="tabbarIcon" src="./assets/img/tabbar/admin.svg" alt="">
        <img slot="tabbarIconAct" src="./assets/img/tabbar/admin1.svg" alt="">
        <div slot="tabbarText">管理</div>s</tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar.vue'
import tabbarItem from './components/tabbar/tabbarItem.vue'

export default {
  name: 'app',
  components: {
    tabbar,
    tabbarItem,
  }
}
</script>
<style>
  @import './assets/css/base.css';
</style>
