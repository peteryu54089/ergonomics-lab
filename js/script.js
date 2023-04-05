// Strict Mode
"use strict";

// Window Load Event
$(window).on("load", function() {

	// Loader Fade Out
    $(".lx-loader").fadeOut();

	// Gallery Resizing
	var gallaryh = $(".lx-gallery[data-bg]:eq(0)").width();
	$(".lx-gallery[data-bg]").each(function(){
		$(this).height(gallaryh);
		$(this).css({"background":"url('"+$(this).attr("data-bg")+"') center center no-repeat","background-size":"cover"});
	});
	
	// ReadMore Resizing
	var rmh = $(".lx-readmore-img[data-bg]:eq(0)").width() * 0.6;
	$(".lx-readmore-img[data-bg]").each(function(){
		$(this).height(rmh);
		$(this).css({"background":"url('"+$(this).attr("data-bg")+"') center center no-repeat","background-size":"cover"});
	});
			
    return false;
});

// Mobile Menu
$(".lx-header-mobile i").on("click",function(){
	if($(".lx-menu").css("left") !== "0px"){
		$(".lx-menu").css("left","0px");
		$(this).text("close");
	}
	else{
		$(".lx-menu").css("left","-100%");
		$(this).text("menu");
	}
});

// Search Form
$(".lx-search-btn i").on("click",function(){
	$(".lx-header-content > div").css("opacity","0.0");
	$(".lx-header-search").css({"display":"block","opacity":"1.0"});
	$(".lx-header-search input[type='text']").focus();
});
$(".lx-header-search input[type='button']").on("click",function(){
	$(".lx-header-content > div").css("opacity","1.0");
	$(".lx-header-search").css({"display":"none"});
});

// Theme Style
$(".lx-theme-style a").on("click",function(){
	if($("link[title]").attr("href") !== "css/light_style.css"){
		$("link[title]").attr("href","css/light_style.css");
		$(this).text("Dark Mode");
	}
	else{
		$("link[title]").attr("href","css/dark_style.css");
		$(this).text("Light Mode");
	}
});