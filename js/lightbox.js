// Strict Mode
"use strict";

var nbgallery = 0;
var posgallery = 0;

// Window Load Event
$(window).on("load", function() {
	// Get Nb of Pictures
	nbgallery = $(".lx-gallery").length;
});

// Gallery Show
$(".lx-gallery").on("click",function(){
	posgallery = $(this).parent().index();
	$("body").css("overflow","hidden");
	$(".lx-main-gallery").css("display","flex");
	$(".lx-gallery-layer").css("display","block");
	$(".lx-main-gallery-content h3 span").text($(this).find("h3").text());
	$(".lx-main-gallery-content img").attr("src",$(this).attr("data-bg")).css("max-height",$(window).height()+"px");
});

$(".lx-main-gallery-content img").on("load",function(){
	$(".lx-gallery-layer").css("display","none");
});

$(".lx-main-gallery-header i").on("click",function(){
	$("body").css("overflow","auto");
	$(".lx-main-gallery").css("display","none");
});

$(".lx-main-gallery-content .lx-next").on("click",function(){
	if(posgallery < (nbgallery - 1)){
		posgallery++;
	}
	else{
		posgallery = 0;
	}
	$(".lx-main-gallery-content h3 span").text($("div[data-gallery='"+posgallery+"']").find("h3").text());
	$(".lx-main-gallery-content img").attr("src",$("div[data-gallery='"+posgallery+"']").find(".lx-gallery").attr("data-bg")).css("max-height",$(window).height()+"px");
});

$(".lx-main-gallery-content .lx-prev").on("click",function(){
	if(posgallery > 0){
		posgallery--;
	}
	else{
		posgallery = nbgallery - 1;
	}
	$(".lx-main-gallery-content h3 span").text($("div[data-gallery='"+posgallery+"']").find("h3").text());
	$(".lx-main-gallery-content img").attr("src",$("div[data-gallery='"+posgallery+"']").find(".lx-gallery").attr("data-bg")).css("max-height",$(window).height()+"px");
});

$(document).on("keyup", function(e) {
    if (e.keyCode === 27) {
        $(".lx-main-gallery-header i").trigger("click");
    }
    if (e.keyCode === 37) {
        $(".lx-main-gallery-content .lx-prev").trigger("click");
    }	
	if (e.keyCode === 39) {
        $(".lx-main-gallery-content .lx-next").trigger("click");
    }	
});