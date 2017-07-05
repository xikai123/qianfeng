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
/*
$("toTop").onclick = function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
};
*/
/*
$("mail").onblur = function(){
	let str = $("mail").value;
	let reg = /^\w+@\w(\.\w+)+$/;
	let reg1 = /^1\d{10}$/;
	if((reg.test(str)) || (reg1.test(str))){
		
	}else{
		$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
		return;
	}
};
*/
$("sp1").onclick = function(){//字母、数字组合验证码
	code();
};

function code(){
	let num;
	let str1="";
	while(true){
		num = parseInt(Math.random()*123);
		if(num>=65 && num<=90){
			str1 += String.fromCharCode(num);
		}
		if(num>=97 && num<=122){
			str1 += String.fromCharCode(num);
		}
		if(num>=0 && num<=9){
			str1 += num.toString();
		}
		if(str1.length>=4){
			break;
		}
	}
	$("sp1").innerHTML=str1;
	
}
$("yan").onblur = function(){
	var str2 = $("sp1").innerHTML;
	str2 = str2.toLowerCase();
	var str3 = $("yan").value;
	str3 = str3.toLowerCase();
	if(str3!=str2){
		$("yan1").innerHTML = "请输入正确的验证码";
	}
};

$("btn1").onclick = function(){
	if($("mail").value && $("yan").value){
		location.href="index.html";	
	}else{
		alert("请完善您的信息");
	}
}

window.onload = function(){
	code();
}
}