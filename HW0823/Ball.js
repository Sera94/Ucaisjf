

//创建球，刚开始的位置随机，移动位置也随机，定时器控制移动

(function(){
	
	function Ball() {
		
		//新建div，球刚开始出现的位置随机
		this.ball = document.createElement("div");
		this.ball.className = "ball";
		//屏幕可用工作区宽度
		this.ball.style.left = Math.random()*screen.availWidth + "px";
		this.ball.style.top = Math.random()*690 + "px";
		
	}
	
	//返回htmlNode
	Ball.prototype.getBall = function () {
		return this.ball;
	}
	
	Ball.prototype.ballMove = function (){
		
//		//移动位置随机   定时器
//		
//		
//		//this
//		var self = this;
//		setInterval(function (){
//			
//			//移动位置都为右下？
////			var direction = dx > 0 ? 1 : -1;
//			var moveX = -Math.random() * 200 + 100;
//			var moveY = -Math.random() * 200 + 100;
//			//在原来的基础上往外移？
//			//原来位置有px，而非纯数字，字符串转换为数字
//			self.ball.style.left = parseInt(self.ball.style.left) + moveX + "px";
//			self.ball.style.top = parseInt(self.ball.style.top) + moveY + "px";
//			
//		},100);

		var x = parseInt(this.ball.style.left);
		var y = parseInt(this.ball.style.top);
		var moveX = 10 - Math.floor(Math.random()*20);
		var moveY = 10 - Math.floor(Math.random()*20);
		
		var self = this;
		setInterval(function(){
			x += moveX;
			y += moveY;
			
			self.ball.style.left = x + moveX + "px";
			self.ball.style.top = y + moveY + "px";
			
		},40);
		
	}
	
	window.Ball = Ball;
	
})();
