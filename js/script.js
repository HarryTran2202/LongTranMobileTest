$(document).ready(function(){
	var stt = 0;
	var endImg = $("img.img-slider:last").attr("id");

	execute = function(){
		$("img.img-slider").hide();
		$("img.img-slider").eq(stt).fadeIn(700);

		$(".radius-slide div").removeClass("active");
		$(".radius-slide div").eq(stt).addClass("active");

		$("a.a-slider").hide();
		$("a.a-slider").eq(stt).show();
	}

	$(".radius-slide div").click(function(){
		stt = $(this).attr("id");
		execute();
	});

	$(".caret-left").click(function(){
		if(--stt < 0){
			stt = endImg;
		}

		execute();
	});

	$(".caret-right").click(function(){
		if(++stt > endImg){
			stt = 0;
		}

		execute();
	});

	var interval;
	var timer = function(){
		interval = setInterval(function(){
			$(".caret-right").click();
		}, 3000);
	}
	timer();
});