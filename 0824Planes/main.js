

(function () {

	var container = document.querySelector("#container");
    var battery = new Battery(); 
    var bullents = [];
    container.appendChild(battery.htmlNode);
//  var plane = new Plane(); 
//  var planes = [];
//  container.appendChild(plane.htmlNode);
    
    //键盘敲击事件keydown
    document.addEventListener("keydown", function (event) {
    	//数字对应键盘上的空格键
        if (event.keyCode == 32) {
        	//发射子弹居中
            var x = parseInt(battery.htmlNode.style.left) + 23;
            var bullent = new Bullet(x);
            bullents.push(bullent);
            container.appendChild(bullent.htmlNode);
        }
        //数字对应键盘上的左右键
        if (event.keyCode == 37) battery.moveToLeft();
        if (event.keyCode == 39) battery.moveToRight();
    })

	//定时器向上发射移动   越界移除有问题???
    setInterval(function () {
        for (var i = 0; i < bullents.length; i++) {
            if (bullents[i].gone) {
                bullents[i].removeBullet();
                bullents.splice(i, 1);
            }
            if (bullents.length>0)
                bullents[i].setPosition();
        }
    }, 20);
    
})();