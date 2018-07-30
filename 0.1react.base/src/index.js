import React from 'react';
import ReactDOM from 'react-dom'

const myh1 = React.createElement('h1' , {
    id:'myh1',
    title:"this is my first react project"
}, "这是我们的主界面");
const mydiv = React.createElement('div' , null , "这是一个div对象" , myh1);
//至少三个参数
//React.createElement方法接受三个参数 第一个参数表示类型 第二个参数是一个对象或者是NULL 参数三 子节点 参数n 其他子节点
//先放一个我们要进行渲染的容器
//进行渲染
ReactDOM.render(mydiv , document.getElementById('app'));

//猜测第二个参数接受的是一个dom元素而不是选择器
//使用reactdom把元素渲染到页面上 之前我们只是使用的虚拟dom

//混合使用xml的语法
//渲染页面 最好的方法是什么？ 当然是使用html react 中允许我们使用 html 这就是我们所说的jsx语法 但是在js中写html肯定不能打包成功 我们要使用jsx 当然首先要使用把babel就可以将语句转换成react.createElement()语法
//但是这样使用确实麻烦

console.log("ok");
console.log("is changed");