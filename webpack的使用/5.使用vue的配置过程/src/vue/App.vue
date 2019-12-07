<template>
  <div>
      <h2>Which car is your like?</h2>
      <myCar @getLike="getCar"></myCar>
      <button></button>
  </div>
</template>

<script>
import car from './components/car.vue'
export default {
    data() {
        return {
            car:'',
        }
    },
    methods: {
        getCar(){
            this.car = like
        }
    },
    components: {
        'myCar': car
    }
}
</script>

<style>

</style>