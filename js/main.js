function placeOnRightHandEdgeOfElement(toolbar, pageElement) {
    $(toolbar).css("right", $(window).scrollLeft() + $(window).width()
    - $(pageElement).offset().left
    - parseInt($(pageElement).css("borderLeftWidth"),10)
    - $(pageElement).width() + "px");
}



$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$(window).resize(function() {
		placeOnRightHandEdgeOfElement("#columnaScrollspy", "#productsPeople");
	});
	$(window).scroll(function () { 
		placeOnRightHandEdgeOfElement("#columnaScrollspy", "#productsPeople");
	});
	$("#columnaScrollspy").resize();
	$('.scrollspy').scrollSpy();
	
});

