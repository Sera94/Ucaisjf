

//炮台按左右键可以移动，按空格键发射子弹
(function () {

    function Battery() {
        this._htmlNode = document.createElement("div");
        this._htmlNode.className = "battery";
        //刷新时的初始位置
        this._x = 240;
    }

    Object.defineProperty(Battery.prototype, "htmlNode", {
        get: function () {
            return this._htmlNode;
        }
    });
    
    Object.defineProperty(Battery.prototype, "x", {
        set: function (value) {
            this._x = value;
        },
        get: function () {
            return this._x;
        }
    });
    
    //左右移动到边界
    Battery.prototype.moveToLeft = function () {
        if (this.x > 0) {
            this.x -= 10;
            this.htmlNode.style.left = this.x + "px";
        }
    }

    Battery.prototype.moveToRight = function () {
        if (this.x < 500) {
            this.x += 10;
            this.htmlNode.style.left = this.x + "px";
        }
    }

    window.Battery = Battery;

})();