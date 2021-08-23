$(document).ready(function(){
	var stt;

	execute = function(){
		$("img#situation-color").hide();
		$("img#situation-color").eq(stt).show();
	}

	$(".situation-title").onclick(function(){
		stt = $(this).attr("idx");

		execute();
	});

	valLabel = function(){
		if ($("#label").val("Admin")){
			$("#label label").addClass(".label-active-admin");
		}
		if($("#label").val("Member")){
			$("#label label").addClass(".label-active-member")
		}
	}

	valLabel();
});