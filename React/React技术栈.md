React技术栈
====

# 第一章 React入门

## 1.React基本使用

### 1.1 React的相关js库
1.React的核心库:[react.development.js](https://cdn.bootcss.com/react/16.10.2/cjs/react.development.js)  
2.React的扩展库:[react-dom.development.js](https://cdn.bootcss.com/react-dom/16.10.2/cjs/react-dom.development.js)   
3.支持运行JSX预处理器的扩展库:[babel.min.js](https://cdn.bootcss.com/babel-standalone/7.0.0-beta.3/babel.min.js)

### 1.2 在页面中导入js
在使用React时需要在编码前引入React的三个库,需要使用JSX预处理器的在脚本声明中声明为babel而非javascript
```HTML
<script src="https://cdn.bootcss.com/react/16.10.2/cjs/react.development.js" type="text/javascript"><script>
<script src="https://cdn.bootcss.com/react-dom/16.10.2/cjs/react-dom.development.js" type="text/javascript"><script>
<script src="https://cdn.bootcss.com/babel-standalone/7.0.0-beta.3/babel.min.js" type="text/javascript"><script>
<script type="text/babel"><script>
````
### 1.3 安装React开发者工具
为了便于后期调试需要安装再chrome中安装一个React开发者工具.


## 2.React JSX

### 2.1 虚拟DOM
1.React提供了一些API来创建一种特别的一般JS对象
````javascript
var vDOM = React.createElement('h1',{id:'myTitle'},'hello')
````
上面创建的就是一个简单的虚拟DOM对象   
2.虚拟DOM对象最终会被React转换成真实DOM对象   
3.我们在编码时只需要操作React的虚拟DOM数据,React会自动转换成真实DOM并更新页面

### 2.2 JSX
1.JSX是一个javascript的语法扩展,具有javascript的全部功能,并且可以通过JSX生成React元素   
2.可以将表达式包裹在大括号中,在JSX中使用它
````javascript
	const name = "jack"
	const element = <h1>Hello,{name}</h1>
	ReactDOM.render(
		element,
		document.getElementById('root')
	)
````
3.JSX也是一个表达式,在编译后,会转换为普通的的javascript函数调用,并且取值后得到javascript对象.
````javascript
	function getMeeting(user){
		if(user){
			return <h1>Hello,{formatName(user)}</h1>
		}else{
			return <h1>Hello,Stronger</h1>
		}
	}
````
4.在JSX中可以通过引号将属性值指定为字符串字面量,也可以通过大括号在属性中插入javascript表达式
````javascript
const element = <img src={user.avatarUrl}></img>
````
5.JSX中可以包含子元素   
6.Babel会把JSX转译成一个React.createElement()函数调用,下面两种方式都是一样的   
````javascript
	const element = (
		<h1 className="meeting">
		Hello,world
		</h1>
	)
````
````javascript
	const element = React.createElement(
		h1,
		{className : "meeting"}
		"Hello,world"
	)
````

## 3.元素渲染

### 3.1 将一个元素渲染成DOM
元素是React应用的最小单元,React DOM通过ReactDOM.render()更新DOM来与React元素保持一致.
### 3.2 更新已渲染的元素
React元素是不可变对象,创建后无法修改其子元素和属性.  
需要更新一个UI必须创建一个新的元素,并进行渲染,计时器例子:
````javascript
	function tick (){
		const element = (
			<h1>Hello World</h1>
			<h2>It is {new Date().toLocaleTimeString()}</h2>
		)
		ReactDOM.render(element,document.getElementById('root'))
	}
	setInterval(tick,1000)
````
### 3.3 React只更新需要更新的部分
React DOM会将元素和他的子元素与他们之前的状态进行对比,只会进行必要的更新,以达到预期的效果