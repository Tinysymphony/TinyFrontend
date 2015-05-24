
$(document).ready(function(){
	if($(document).width() > 1000){
		$("#editorBoard").css("width", "90%");
		$("#editorBar").css("width", "10%");
	} 
	else{
		$("#editorBoard").css("width", "80%");
		$("#editorBar").css("width", "20%");		
	}

	$("#fun1").click(function(){
		alert($(window).width());
		alert($(window).height());
		alert($(document).width());
	});

	$(".headButton").mouseover(function(){
		$(this).css("background-color", "#333333");
	});
	$(".headButton").mouseleave(function(){
		$(this).css("background-color", "black");
	});

	$(".mainLink").mouseover(function(){
		$(this).css("background-color", "rgb(138,107,190)");
	});
	$(".mainLink").mouseleave(function(){
		$(this).css("background-color", "rgb(106,76,156)");
	});

	$(".shareMenu").mouseover(function(){
		$(this).css("background-color", "rgb(138,107,190)");
	});
	$(".shareMenu").mouseleave(function(){
		$(this).css("background-color", "rgb(106,76,156)");
	});

	$("#hide").click(function(){
		$("#editor").animate({left:'-30%'},"slow");
		$("#result").animate({width:'90%'},"slow");
		$("#hide").animate({opacity:'0.2'},"slow");
		$("#show").animate({opacity:'1'},"slow");

	});

	$("#show").click(function(){
		$("#editor").animate({left:'0'},"slow");
		$("#result").animate({width:'60%'},"slow");
		$("#hide").animate({opacity:'1'},"slow");
		$("#show").animate({opacity:'0.2'},"slow");
	});

});

$(window).resize(function(){
	if($(document).width() > 1000){
		$("#editorBoard").css("width", "90%");
		$("#editorBar").css("width", "10%");
	} 
	else{
		$("#editorBoard").css("width", "80%");
		$("#editorBar").css("width", "20%");		
	}
});