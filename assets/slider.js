$(document).ready(function() {
	var size = 15;
	var img_count = 4;

	$button_next = $("<button>");
	$button_prev = $("<button>");
	
	$button_next.append("next");
	$button_prev.append("prev");
	$(".image-slider-header").append($button_prev);
	$(".image-slider-header").append($button_next);

	for(var i=0; i < img_count; i++) {
		$circle = $("<span>", {class: 'circle-button'});
		$circle.css("width",size + "px");
		$circle.css("height",size + "px");

		if(i == 0) {
			$circle.addClass("active");
		}

		$(".image-slider-controlls").append($circle);
	}
});