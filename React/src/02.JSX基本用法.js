//引入react
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟dom,使用jsx
const myh1 = (
    <h1 id="h1" title="myh1">
        <p>再插入一个p</p>
        我是jsx创建的h1
    </h1>
)


//渲染虚拟dom
ReactDOM.render(myh1,document.getElementById('app'))
