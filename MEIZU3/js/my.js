$(".yifu1").on("mouseenter", function() {
                $('#erji2').show();
            })
$(".yifu1").on("mouseleave", function() {
                $('#erji2').hide();
            });
$("#erji2").on("mouseenter", function() {
                $(this).show();
            })
$("#erji2").on("mouseleave", function() {
                $(this).hide();
            });









/*返回顶部*/

/*
$("toTop").onclick(function(){ 
 $('body,html').animate({ scrollTop: 0 }, 100); 
 return false; 
});

*/


$("#toTop").onclick = function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
};
