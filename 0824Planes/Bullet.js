(function () {

    function Bullet(x) {
        this._htmlNode = document.createElement("div");
        this.htmlNode.className = "bullet";
        this.htmlNode.style.left = x + "px";
        this._height = 50;
    }

    Object.defineProperty(Bullet.prototype, "htmlNode", {
        get: function () {
            return this._htmlNode;
        }
    });

    Object.defineProperty(Bullet.prototype, "height", {
        set: function (value) {
            this._height = value;
        },
        get: function () {
            return this._height;
        }
    });

    Bullet.prototype.setPosition= function () {
        this.height += 5;
        this.htmlNode.style.bottom = this.height + "px";
    }

//	越界移除???不对
    Bullet.prototype.removeBullet = function () {
        this.htmlNode.parentNode.removeChild(this.htmlNode);
    }



    window.Bullet = Bullet;

})();