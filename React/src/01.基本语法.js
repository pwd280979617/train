//引入react
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟dom
const myh1 = React.createElement('h1',{id:"h1", title:"myh1"},'我是一个h1')
//将myh1天假到一个div中
const myDiv = React.createElement('div',null,'这是一个div',myh1)

//渲染虚拟dom
ReactDOM.render(myDiv,document.getElementById('app'))
