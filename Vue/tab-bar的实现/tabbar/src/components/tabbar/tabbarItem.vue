<template>
    <div id="tabbarItem" @click="itemClick">
        <div v-if="!isActive"><slot name="tabbarIcon"></slot></div>
        <div v-else><slot name="tabbarIconAct"></slot></div>
        <div :class="{active:isActive}"><slot name="tabbarText"></slot></div>
    </div> 
</template>

<script>
export default {
    name: 'tabbarItem',
    data() {
        return {
            isActive: true,
            //path: '/home'
        }
    },
    props: {
        path: String
    },
    methods: {
        itemClick(){
            this.$router.push(this.path).catch(err => {err})
        }
    },
}
</script>

<style>
    #tabbarItem {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

    #tabbarItem img {
      height: 24px;
      width: 24px;
  }

  .active {
      color: rgb(69, 69, 221)
  }
</style>