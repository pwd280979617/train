<template>
  <div>
      <label for="item">
          <input type="radio" v-for="item in cars" :key="item" id="item" value="item" v-model="like" @click="emit">{{item}}
      </label>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cars: ['Audi','Benz','BMW','Volvo'],
            like: '',
        }
    },
    methods: {
        emit(){
            this.$emit('getLike',this.like)
        }
    },
}
</script>

<style>

</style>