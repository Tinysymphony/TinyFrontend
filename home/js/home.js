
var barFontSize = "180%";

$(document).ready(function(){

	if($(document).width() > 1000){
		$("#editorBoard").css("width", "90%");
		$("#editorBar").css("width", "10%");
		$(".Segment").css("font-size", "180%");
	} 
	else{
		$("#editorBoard").css("width", "80%");
		$("#editorBar").css("width", "20%");
		$(".Segment").css("font-size", "80%");	
	}

	$("#fun1").click(function(){
		// alert($(window).width());
		// alert($(window).height());
		// alert($(document).width());
	});

	// $("#editorBoard").mousewheel(function(event) {
	//     console.log(event.deltaX, event.deltaY, event.deltaFactor);
	// 	if(event.deltaY < 0){
	// 		$("#SegmentHolder").animate({top:'-=20%'}, 50);
	// 	}
	// 	else{
	// 		$("#SegmentHolder").animate({top:'+=20%'}, 50);
	// 	}
	// });

	$("#appendNew").mouseover(function(){
		$(this).animate({opacity:'0.7'},"fast");
	});
	$("#appendNew").mouseleave(function(){
		$(this).animate({opacity:'1.0'},"fast");
	});



	$(".HeadButton").mouseover(function(){
		$(this).css("background-color", "#333333");
	});
	$(".HeadButton").mouseleave(function(){
		$(this).css("background-color", "black");
	});

	$(".MainLink").mouseover(function(){
		$(this).css("background-color", "rgb(138,107,190)");
	});
	$(".MainLink").mouseleave(function(){
		$(this).css("background-color", "rgb(106,76,156)");
	});

	$(".ShareMenu").mouseover(function(){
		$(this).css("background-color", "rgb(138,107,190)");
	});
	$(".ShareMenu").mouseleave(function(){
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

	$("#appendNew").click(function(){
		var newSegment = "<div id='tt' class='Segment'>Appended</div>";
		$("#SegmentHolder").append(newSegment);

		var container = $("#editorBoard");
		scrollTo = $('#SegmentHolder').children(":last"); 
		scrollTo.css("font-size", barFontSize);
		container.animate({
    		scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    	});

	});


	// $(".Segment").mouseover(function(){
	// 	$(this).css({"background-color":"#EEDC82"});
	// });
	// $(".Segment").mouseleave(function(){
	// 	$(this).css({"background-color":"#fff"});
	// });

	$(".Segment").click(function(){
		$(this).css({"background-color":"#EEDC82"});
		$(".Segment").not(this).css({"background-color":"#fff"});
	});


});

$(window).resize(function(){
	if($(document).width() > 1000){
		barFontSize = "180%";

		$("#editorBoard").css("width", "90%");
		$("#editorBar").css("width", "10%");
		$(".Segment").css("font-size", "180%");
	} 
	else{
		barFontSize = "80%";
		$("#editorBoard").css("width", "80%");
		$("#editorBar").css("width", "20%");
		$(".Segment").css("font-size", "80%");	
	}

	// $(".Pic").css("height", $(".Pic").next().css("height"));

});


