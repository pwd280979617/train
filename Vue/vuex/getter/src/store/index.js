import vue from 'vue'
import vuex from 'Vuex'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        counter: 100,
        students: [
            {name:'tom',age:18},
            {name:'jack',age:20},
            {name:'lily',age:21},
            {name:'alice',age:16}
        ]
    },
    getters: {
        doubleCounter(state){
            return state.counter*state.counter
        },
        filterAge(state){
            return function (age) {
                return state.students.filter(s => s.age >= age)
            }
        }
    }
})

export default store