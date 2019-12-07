const {math1,math2} = require('./js/methods.js')

import {book1} from  './js/data.js'

console.log(math1(1,2))
console.log(math2(2,2))
console.log(book1)

import css from './css/style.css';

import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
    el: '#app',
    template: `<myApp />`,
    components: {
        'myApp': App
    }
})