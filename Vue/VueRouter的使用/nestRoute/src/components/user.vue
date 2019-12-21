<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户内容</p>
        <p>我是{{userId}}</p>
    </div>
</template>

<script>
export default {
    name: 'user',
    computed: {
        userId(){
            return this.$route.params.userId
        }
    },
}
</script>

<style>

</style>