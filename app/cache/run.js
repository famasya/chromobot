/* Johnny-five powered arduino programming. */
var five = require("johnny-five");
var board = new five.Board();
var c = 0;

board.on("ready", function() {
	this.loop(1000, function(){
		c++;
		console.log("Halo "+c);
	})
});