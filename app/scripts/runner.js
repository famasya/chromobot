var editor = ace.edit("script");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");
editor.setFontSize("14");
editor.setValue(localStorage.scriptcache);

$(document).ready(function(){
	$("#clear").click(function(){
		$("#state").text("");
	})
	$("#log").click(function(){
		window.open('cache/log.txt')
	})
	$('#script')
	.keydown(function (e) {
		if (e.ctrlKey && e.keyCode == 13) {
			$("#run").click();
		}
	})
	.keydown(function (e) {
		if (e.ctrlKey && e.keyCode == 32) {
			$("#kill").click();
		}
	})
	.keyup(function(){
		localStorage.scriptcache = editor.getValue();
	})
});
