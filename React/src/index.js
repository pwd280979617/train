//引入react
import React from 'react'
import ReactDOM from 'react-dom'

//创建对象
const stars = {
    name:'Jay',
    age:36,
    sex:'男'
}

//创建组件
function Head (props){
    return <h1>大家好,我是{props.name},今年{props.age},我是一个{props.sex}明星</h1>
}

const myh1 = <Head name={stars.name} age={stars.age} sex={stars.sex}></Head>

//渲染虚拟dom
ReactDOM.render(myh1,document.getElementById('app'))
