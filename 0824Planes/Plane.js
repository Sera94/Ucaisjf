/**
 * Created by Administrator on 2016/8/24 0024.
 */

//容器container，炮台，飞机，子弹
//炮台点击能发射子弹，子弹垂直上移，两种情况 1.移到上边界之后消失  2.碰到飞机。。效果
//飞机左右分别进入，越界消失   飞行高度不同，速度不同？
//飞机数组，随机出现，速度随机，出现顺序随机，左右移随机

(function () {

    function Plane() {

        this._htmlNode = document.createElement("img");
        this._htmlNode.className = "plane";
//      this.htmlNode.src = this.planes[];
//      this._x = 0;
//      this._speedX = Math.random()*10;
//      this._htmlNode.style.width = "69px";
//      this._htmlNode.style.Height = "26px";
//      this._htmlNode.style.background = "url(3.png)";
//      
}

    
    
//  Plane.prototype.move = function () {
//      this.x += this._speedX;
        
//      if(this.x < 0){
//
//          Plane.removePlane(this);
//      }
//  }
    
//  Plane.prototype.getHtmlNode = function () {
//      return this._htmlNode;
//  }
    
    //Unexpected identifier?????
    Object.defineProperty(Plane.prototype,"htmlNode",{
        get:function () {
            return this._htmlNode;
        }
    });
//  
//  Object.defineProperty(Plane.prototype,"x",{
//      get:function () {
//          return this._x;
//      },
//      set:function (value) {
//          this._x = value;
//          this.htmlNode.style.left = this._x+"px";
//      }
//  });
    
//  Plane.prototype.Planes = ["3.png", "4.png", "5.png", "6.png", "7.png",]
    
    Plane.createPlane = function () {
    	var plane = new Plane();
    	document.body.appendChild(plane.htmlNode);
    	return plane;
    }
    
//  Plane.prototype.setPosition = function () {
//      this._x += this.speedX;
//      if (this._x > 550) {
//          this._gone = true;
//      }
//  }
//
//  Plane.prototype.move = function () {
//      this.setPosition();
//      this.htmlNode.style[this.x] = this._x + "px";
//  }
//
//  Plane.prototype.removePlane = function () {
//      this.htmlNode.parentNode.removeChild(this.htmlNode);
//  }
    
    window.Plane = Plane;

})();