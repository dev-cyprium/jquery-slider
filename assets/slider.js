ImageSlider = function(img_count, img_size) {
	this.index = 0;
	this.img_count = img_count;
	this.img_size = img_size;
	this.circles = [];

	for(var i = 0; i < img_count; i++ ) {
		$circle = $("<span>", {class: "circle", id: "circle-"+i});
		var ref = this;
		$circle.click(function() {
			var index = this.id.substring(7);
			console.log(index);
			ref.setIndex( index );
		});
		$(".circle-controlls").append($circle);
		this.circles.push($circle);
	}

	this.circles[0].addClass("active");
}

ImageSlider.prototype.setIndex = function (index) {
	this.circles[this.index].removeClass("active");
	this.index = index;
	$(".image-slides").stop();
	$(".image-slides").animate({marginLeft: -this.index*this.img_size+"px"});
	this.circles[index].addClass("active");
}

ImageSlider.prototype.next = function() {
	this.circles[this.index].removeClass("active");
	if(this.index == this.img_count-1) {
		$(".image-slides").animate({marginLeft: "0"}, 500);
		this.index = 0;
	} else {
		$(".image-slides").animate({marginLeft: "-=720px"}, 1000);
		this.index++;
	}
	this.circles[this.index].addClass("active");
}

ImageSlider.prototype.prev = function() {
	this.circles[this.index].removeClass("active");
	if(this.index == 0) {
		$(".image-slides").animate({marginLeft: -this.img_size*(this.img_count-1)+"px"}, 1500);
		this.index = this.img_count-1;
	} else {
		$(".image-slides").animate({marginLeft: "+=720px"}, 1000);
		this.index--;
	}
	this.circles[this.index].addClass("active");
}

$(document).ready(function() {
	var slider = new ImageSlider(4, 720);

	var frameMovement = setInterval(function() {
		slider.next();
	}, 4000);

	$("#next").click(function() {
		slider.next();
	});

	$("#prev").click(function() {
		slider.prev();
	});

});