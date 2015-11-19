var editor = ace.edit("script");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");
editor.setFontSize("14");
$("#clear").click(function(){
	$("#state").text("");
})

$("#log").click(function(){
	window.open('cache/log.txt')
})

$('#script').keydown(function (e) {
	if (e.ctrlKey && e.keyCode == 13) {
		$("#run").click();
	}
});

$('#script').keydown(function (e) {
	if (e.ctrlKey && e.keyCode == 32) {
		$("#kill").click();
	}
});