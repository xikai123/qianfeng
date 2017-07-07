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

//验证邮箱号、手机号
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
//验证密码
$("pass").onblur = function(){
	let str = $("pass").value;
	let reg = /^[0-9a-zA-Z_]\w{5,11}$/;
	if(reg.test(str)){
		
	}else{
		$("pass1").innerHTML = "您好，请检查您的密码设置是否符合要求";
		return;
	}
};
//确认密码
$("passCheck").onblur = function(){
	if($("passCheck").value==$("pass").value){
		
	}else{
		$("passCheck1").innerHTML = "请核对您两次输入的密码是否一致";
	}
};

//验证验证码
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
	//随机颜色
	var num1=parseInt(Math.random()*255);
	var num2=parseInt(Math.random()*255);
	var num3=parseInt(Math.random()*255);
	//console.log(num1+":"+num2+":"+num3)
	$("sp1").innerHTML=str1;
	$("sp1").style.color="rgb("+num1+","+num2+","+num3+")";
	
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

//$("btn1").onclick = function(){
//	if($("mail").value && $("yan").value){
////		location.href="index.html";	
//		alert("恭喜您，注册成功了");
//	}else{
//		alert("请完善您的信息");
//	}
//}
//$("#mail").blur(function(){
//	$.ajax({
//		url:"checkUser.php",
//		async:true,
//		data:"userName="+this.value,
//		type:"get",
//		success:function(data){
//			if(data=="1"){
//				$("#userInfo").html("该用户已经被注册了");
//			}else{
//				$("#userInfo").html("该用户没有人使用");
//			}
//		}		
//	});	
//});

window.onload = function(){
	code();
}
