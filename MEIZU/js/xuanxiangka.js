/*
window.onload=function() {
	var ul = document.getElementById("ul");
	
	ul.children[0].onclick =function(){
		show(0);
	}
	ul.children[1].onclick =function(){
		show(1);
	}
	ul.children[2].onclick =function(){
		show(2);
	}
	
	function show(ord){
		var box = document.getElementById("box");
		//让所有div隐藏
		for(var i=0;i<box.children.length;i++){
			box.children[i].style.display = "none";
		}
		//让第一个div显示
		box.children[ord].style.display = "block";
	}

}
*/
window.onload=function(){
	//根据序号切换选项卡，序号会传给data参数
	function xuanze(data){
		var liarr = document.getElementsByTagName("li");//取得所有li元素，也就是取得所有选项卡
		for(var i in liarr){//遍历所有li元素
			liarr[i].className = "";//把所有选项卡样式清除
		}
		liarr[data-1].className = "act";//设置序号对应的选项卡样式为act样式
		var tab_c =$("tab_c"); //取得包含所有内容层的DIV
		var arrdiv=[];
		for(var i in tab_c.childNodes){//循环tab_c的所有子元素
			if(tab_c.childNodes[i].nodeType==1){//判断子元素是否是元素节点，判断是否是内容层	tab_c.childNodes[i].className="hide"
				tab_c.childNodes[i].className = "hide";//设置所有子元素节点样式为隐藏
				arrdiv.push(tab_c.childNodes[i]);//将所有元素节点放置到一个数组中
			}
		}
		arrdiv[data-1].className ="";//设置对应的内容层样式为空，实现对应层显示效果
	}

}