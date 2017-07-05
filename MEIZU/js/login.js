window.onload=function(){
function $(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}


/*
$(".nav_c").onmouseover = function(){
	let ulDOM = $create("ul");
	
	
}
*/


window.onscroll = function () { 
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t > 100) { 
		$("right").style.display="block" ;
	} else { 
		$("right").style.display="none" ;
	} 
};


//回到顶部
/*
$("toTop").onclick(function(){ 
 $('body,html').animate({ scrollTop: 0 }, 100); 
 return false; 
});
*/
$("toTop").onclick = function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
};


$("user").onblur = function(){
	let str = $("user").value;
	let reg = /^\w+@\w(\.\w+)+$/;
	let reg1 = /^1\d{10}$/;
	if((reg.test(str)) || (reg1.test(str))){
		
	}else{
		$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
		return;
	}
};


$("psw").onblur = function(){
	let str1 = $("psw").value;
	if(str1.length>0){
		
	}else{
		$("psw1").innerHTML = "密码不能为空";
		return;
	}
};

$("btn1").onclick = function(){
	if($("user").value && $("psw").value){
		location.href="index.html";	
	}else{
		alert("请完善您的信息");
	}
}
}