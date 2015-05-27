$(document).ready(function(){
	$("#turnToRegister").click(function(){
		$("#login").animate({left:"-100%", display:"none"},500);
		$("#signin").animate({top:"0", opacity:"1"},1000);
	});
	$("#turnToLogin").click(function(){
		$("#login").animate({left:"0", display:"true"},1000);
		$("#signin").animate({top:"-100%", opacity:"0"},500);		
	});
});