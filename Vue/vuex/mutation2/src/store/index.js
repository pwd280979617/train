import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        counter: 100,
        students: [
            {name:'tom',age:18},
            {name:'jack',age:21},
            {name:'lily',age:14},
            {name:'alice',age:23}
        ]
    },
    mutations: {
        add(state){
            return state.counter++
        },
        sub(state){
            return state.counter--
        },
        addNum(state,num){
            state.counter += num
        },
        addJohn(state){
            const john = {name:'john',age:25}
            state.students.push(john)
        }
    },
    getters: {
        over20(state){
            return state.students.filter(s => s.age >= 20)
        }
    }
})

export default store