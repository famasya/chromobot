var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port : 9999}),
fs = require('fs'),
child_process = require('child_process'),
shell = require('shelljs');

var pid = 0;

wss.on('connection', function(ws){
	ws.on('message', function(data){
		data = JSON.parse(data);
		if(data['s'] === "kill"){
			var kill = shell.exec("kill "+pid,{silent:true});
			if(data['logfile'] === 'yes'){
				fs.appendFile('../app/cache/log.txt','\n'+new Date()+'\t|Terminated\n-----------\n',function(err){
					if(err){
						console.log(err);
					}
				});
			}
		} else {
			fs.writeFile('../app/cache/run.js',data['s'],function(err){
				if(err){
					console.log(err)
				} else {
					var child = shell.exec('node ../app/cache/run.js',{async:true});
					child.stdout.on('data',function(out){
						pid = child.pid+1;
						ws.send(out);
						if(data['logfile'] === 'yes'){
							fs.appendFile('../app/cache/log.txt',new Date()+'\t|'+out,function(err){
								if(err){
									console.log(err);
								}
							})
						}
					});
					child.stderr.on('data', function(out){
						ws.send(out);
					})
				}
			})
		}
	})
})

console.log("running on 9999")