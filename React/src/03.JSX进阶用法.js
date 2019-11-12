//引入react
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟dom,使用jsx
const arr = ['孙悟空','沙和尚','猪八戒','唐三藏']
const myh1 = arr.map((item,index)=><h1 key={index}>{item}</h1>)

//渲染虚拟dom
ReactDOM.render(myh1,document.getElementById('app'))
