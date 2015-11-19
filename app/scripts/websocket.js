function start(url){
	$('button').not("#kill").attr('disabled',false);
	$("#state").text("");
	var ws = new WebSocket(url);
	$("#run").click(function(){
		var logfile = 'no';
		if($('#logfile').is(':checked')){
			logfile = 'yes';
		}
		var data = {
			's':editor.getValue(),
			'logfile':logfile
		};
		ws.send(JSON.stringify(data));
		$(this).attr('disabled',true)
		$('#kill').attr('disabled',false)
	});
	$("#kill").click(function(){
		var logfile = 'no';
		if($('#logfile').is(':checked')){
			logfile = 'yes';
		}
		var data = {
			's':"kill",
			'logfile':logfile
		};
		ws.send(JSON.stringify(data));
		$('#run').attr('disabled',false)
		$(this).attr('disabled',true)
	});
	ws.onclose = function(e){
		$("#state").text("Daemon is not started");
		$('button').attr('disabled',true)
	}
	ws.onmessage = function(e){
		$("#state").append(e.data);
	}
}

$("#rc").click(function(){
	start("ws://localhost:9999");
})

start("ws://localhost:9999");