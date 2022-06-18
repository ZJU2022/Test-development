// DOM
/* 浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。
如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，
此时将会无法正常获取到DOM对象，导致DOM操作失败。*/
// 解决方式二：将js代c码编写到window.onload = function(){}中window.onload 对应的回调函数会在整个页面加载完毕以后才执行，所以可以确保代码执行时，DOM对象已经加载完毕了

//下列都是按钮功能，id属性为btn01——btn11

//1. 查找#bj节点
window.onload = function()
{
   //id为btn01的按钮绑定一个单击响应函数 => 确保按一下按钮能够响应
  var btn01 = document.getElementById("btn01");//获取btn01这个按钮的对象
  btn01.onclick = function()//在这个函数里实现功能
  {
    //功能：查找#bj节点（id为北京的节点）
    var bj = document.getElementById("bj")
    //innerHTML
    /*
    innerHTML和innerText
这两个属性并没有在DOM标准定义，但是大部分浏览器都支持这两个属性
两个属性作用类似，都可以获取到标签内部的内容，
不同是innerHTML会获取到html标签，而innerText会自动去除标签
如果使用这两个属性来设置标签内部的内容时，没有任何区别的

读取标签内部的文本内容
    */
    
    alert(bj.innerHTML)
  }
  
  


//2. 查找所有li节点
//为id为btn02的按钮绑定单击响应函数
 var btn02 = document.getElementById("btn02")
 btn02.onclick = function()
 {
    //查找所有li节点
   var li = document.getElementsByTagName('li');
   alert(li)
 }
 

//3. 查找name = gender的所有节点
//4. 查找#city下所有li节点
//5. 返回#city下所有子节点
//6. 返回#phone下第一个子节点
 
 };
