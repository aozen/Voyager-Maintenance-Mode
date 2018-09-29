$(document).ready(function($) {
		$('#stylesw').styleSwitcher();
		
	$('.open-close').click(function() {									
		if ($(this).parent().css('left') == '-158px') {
			$(this).parent().animate({
				"left": "0"
			}, 300);
			$(this).addClass("arrwdown");
		} else {
			$(this).parent().animate({
				"left": "-158px"
			}, 300);
			$(this).removeClass("arrwdown");
		}
		
	});
	$('a.col1').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/blue.css' type='text/css' media='screen' />"));
		return false;
	});
	$('a.col2').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/orange.css' type='text/css' media='screen' />"));
		return false;
	});
	$('a.col3').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/pink.css' type='text/css' media='screen' />"));
		return false;
	});

    $("a.col4").click(function(){
        $("head").append($("<link rel='stylesheet' href='css/colors/green.css' type='text/css' media='screen' />"));
        return false;
    });	
	$("a.col5").click(function(){
        $("head").append($("<link rel='stylesheet' href='css/colors/red.css' type='text/css' media='screen' />"));
        return false;
    });	
	$("a.col6").click(function(){
        $("head").append($("<link rel='stylesheet' href='css/colors/purple.css' type='text/css' media='screen' />"));
        return false;
    });
	
	
	$('a.col7').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/h-yellow.css' type='text/css' media='screen' />"));
		return false;
	});
	$('a.col8').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/h-blue.css' type='text/css' media='screen' />"));
		return false;
	});
	$('a.col9').click(function() {
	$("head").append($("<link rel='stylesheet' href='css/colors/h-red.css' type='text/css' media='screen' />"));
		return false;
	});

    $("a.col10").click(function(){
        $("head").append($("<link rel='stylesheet' href='colors/h-green.css' type='text/css' media='screen' />"));
        return false;
    });	
	$("a.col11").click(function(){
        $("head").append($("<link rel='stylesheet' href='colors/h-orange.css' type='text/css' media='screen' />"));
        return false;
    });	
	$("a.col12").click(function(){
        $("head").append($("<link rel='stylesheet' href='colors/h-black.css' type='text/css' media='screen' />"));
        return false;
    });	
	

	$('#pat1').click(function() {
		$('.banner').removeClass("pat2 pat3 pat4 pat5 pat6").addClass("pat1");
		return false;
	});
	$('#pat2').click(function() {
		$('.banner').removeClass("pat1 pat3 pat4 pat5 pat6").addClass("pat2");
		return false;
	});
	$('#pat3').click(function() {
		$('.banner').removeClass("pat1 pat2 pat4 pat5 pat6").addClass("pat3");
		return false;
	});
	$('#pat4').click(function() {
		$('.banner').removeClass("pat1 pat2 pat3 pat5 pat6").addClass("pat4");
		return false;
	});
	$('#pat5').click(function() {
		$('.banner').removeClass("pat1 pat2 pat3 pat4 pat6").addClass("pat5");
		return false;
	});
	$('#pat6').click(function() {
		$('.banner').removeClass("pat1 pat2 pat3 pat4 pat5").addClass("pat6");
		return false;
	});

});
