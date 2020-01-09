import vue from 'vue'
import vuex, { Store } from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        students: {
            name: 'jack',
            age: 18
        }
    },
    mutations: {
        changeAge(state,age){
            state.students.age = age
        }
    },
    actions: {
        aChange(context,age){
            setTimeout(function(){
                context.commit('changeAge',age)
            },1000)
            
        }
    }
})

export default  store