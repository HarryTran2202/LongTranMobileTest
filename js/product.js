$(document).ready(function(){
	var stt = 0;
	var endImg = $("img.img-slider:last").attr("idx");

	execute = function(){
		$("img.img-slider").hide();
		$("img.img-slider").eq(stt).show();

		$("div#radius-slide").removeClass("choose-active");
		$("div#radius-slide").eq(stt).addClass("choose-active");
	}

	$("div#radius-slide").click(function(){
		stt = $(this).attr("idx");
		execute();
	});

	$(".caret-right").click(function(){
		if(++stt > endImg){
			stt = 0;
		}

		execute();
	});
});