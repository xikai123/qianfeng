function $A(id){
	return document.getElementById(id);
}


function $Acreate(name){
	return document.createElement(name);
}
"use strict";

//对象：轮播图
//参数是个对象：面向对象的体现（一切皆对象）；
function Slideshow(obj){
//属性：
	//一、轮播图整体的属性
	//所在容器的id；
	this.boxId=obj.boxId;	
	//图片数组
	this.imgs=obj.imgs;//图片数组中保存着每张图片的路径
	//大小
	this.width =obj.width;
	this.height =obj.height;
	//播放速度
	this.timeSpace=obj.timeSpace;//3000;
	//淡入和淡出图片序号；
	this.currInOrd =1;
	this.currOutOrd =0;
	//大定时器（）
	this.timer =null;
	
	//二、两张图片的切换效果（淡入淡出效果）的属性
	//淡入淡出效果的时间长度
	this.fadeInOutTime =obj.fadeInOutTime;//2000
	//当前透明度
	this.currOpacity =1;
	//透明度增量
	this.opacityInc =0.05;
	//淡入淡出效果
	this.fadeInOutTimer =null;
	
	//三、按钮的属性；
	this.btnColor =obj.btnColor;//原始颜色
	this.btnHighColor =obj.btnHighColor;//高亮颜色
	this.btnWidth =obj.btnWidth;//按钮的宽
	this.btnHeight =obj.btnHeight;
	this.btnHasOrd =obj.btnHasOrd;//按钮上是否有序号；
	//还可以扩展：按钮的位置是上右下左等等。
	
	this.initUI();
	this.autoChange();
}

//方法：
Slideshow.prototype.autoChange =function(){
	var that = this;
	this.timer = setInterval(function(){
		that.goStep();
	},this.timeSpace);
}

Slideshow.prototype.goStep=function (){
	//1）、改变淡入和淡出的图片序号（按照顺序进行变换）
	this.currInOrd++;//1-6   2,3,4,5,6
	this.currOutOrd=this.currInOrd-1; //1,2,3,4,5	
	
	if(this.currInOrd>this.imgs.length){
		this.currInOrd=1;
	}
	if(this.currOutOrd>this.imgs.length){
		this.currOutOrd=1;
	}

	//2）、淡入淡出效果
	this.fadeInOut();

	//3）、改变按钮颜色
	this.changeBtnColor();

}

//二、点击按钮，跳转到对应的图片。
Slideshow.prototype.goImg=function(ord){
	//1）、改变淡入和淡出的图片序号（点那个是那个）
	this.currOutOrd = this.currInOrd;
	this.currInOrd = ord;
	
	//2）、淡入淡出效果
	this.fadeInOut();

	//3）、改变按钮颜色
	this.changeBtnColor();
}
	
//2）、淡入淡出效果
Slideshow.prototype.fadeInOut=function(){
	//淡入淡出的初始化
	this.fadeInOutInit();
	//启动定时器进行淡入淡出效果
	var that = this;
	var myTimeSpace = this.fadeInOutTime/(1/this.opacityInc);
	
	this.fadeInOutTimer=setInterval(function(){
		that.fadeInOutStep();
	},myTimeSpace);	
	
} 

//淡入和淡出的初始化；
Slideshow.prototype.fadeInOutInit=function(){
	//1、把透明度重置为1
	this.currOpacity = 1;
	
	//2、让淡入淡出的两张图片进入容器内，让其它的图片远离容器
	for(var i=0;i<this.imgs.length;i++){
		$A(this.boxId).children[i].style.left = "-100000px";
	}
	
	$A(this.boxId).children[this.currInOrd-1].style.left = "0px";
	$A(this.boxId).children[this.currOutOrd-1].style.left = "0px";
	
}

Slideshow.prototype.fadeInOutStep=function(){
	//改变数据
	this.currOpacity-=this.opacityInc;
	
	//边界停止
	if(this.currOpacity<=0){
		window.clearInterval(this.fadeInOutTimer);
	}
	
	//改变外观
	$A(this.boxId).children[this.currInOrd-1].style.opacity = 1-this.currOpacity;
	$A(this.boxId).children[this.currOutOrd-1].style.opacity = this.currOpacity;
}

Slideshow.prototype.changeBtnColor= function(){
	var ul = $A(this.boxId).lastElementChild;
	for(var i=0;i<this.imgs.length;i++){
		ul.children[i].style.backgroundColor = this.btnColor;
	}
	ul.children[this.currInOrd-1].style.backgroundColor = this.btnHighColor;
}

//3、鼠标悬停时，变换停止
Slideshow.prototype.stopChange=function(){
	window.clearInterval(this.timer);
}

//4、鼠标离开，继续自动变换

Slideshow.prototype.initUI=function(){
	//一、创建轮播图所需要的DOM元素
	//1、所有图片的创建
	for(var i=0;i<this.imgs.length;i++){
		var imgObj = $Acreate("img");
		imgObj.src = this.imgs[i];
		imgObj.style.cssText = "width:"+this.width+"px;height:"+this.height+"px;position:absolute;z-index:"+(this.imgs.length-i);
		$A(this.boxId).appendChild(imgObj);
	}
	//让前两张以外的其它图片远离容器
	for(var i=2;i<this.imgs.length;i++){
		$A(this.boxId).children[i].style.left = "-100000px";
	}
	
	//2、所有按钮的创建
	var ulObj = $Acreate("ul");
	ulObj.style.cssText = "position:absolute;right:30px;bottom:0px;z-index:999;display:flex;justify-content:space-between";
	$A(this.boxId).appendChild(ulObj);
	
	for(let i=0;i<this.imgs.length;i++){
		var liObj = $Acreate("li");
		liObj.style.cssText = "list-style:none;float:left;margin:10px;width:"+this.btnWidth+"px;height:"+this.btnHeight+"px;border-radius:50%;text-align:center;background-color:"+this.btnColor+";";
		if(this.btnHasOrd){
			liObj.innerHTML = i+1;
		}
		var that = this;
		liObj.onmouseover = function(){
			that.goImg(i+1);
		}
		ulObj.appendChild(liObj);
	}
	//让第一个按钮变成高亮颜色；
	ulObj.children[0].style.backgroundColor = this.btnHighColor;
	
	var that = this;
	$A(this.boxId).onmouseover = function(){
		that.stopChange();
	} 

	$A(this.boxId).onmouseout = function(){
		that.autoChange();
	} 	
}

window.onload = function(){
	new  Slideshow({
		boxId:"banner",
		imgs:["images/liebiaoimg/banner1.jpg","images/liebiaoimg/banner2.jpg","images/liebiaoimg/banner3.jpg","images/liebiaoimg/banner4.jpg","images/liebiaoimg/banner5.jpg","images/liebiaoimg/banner6.jpg"],
		width:1263,
		height:480,
		timeSpace:3000,
		fadeInOutTime:2000,
		btnColor:"pink",
		btnHighColor:"red",
		btnWidth:20,
		btnHeight:20,
		btnHasOrd:true
	});
}