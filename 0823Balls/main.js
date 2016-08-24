

(function(){
	
	var container = document.querySelector("#container");
	
	for (var i=0; i<=50; i++) {
		var ball = new Ball();
		container.appendChild(ball.getBall());
		ball.ballMove();
	}
	
})();
