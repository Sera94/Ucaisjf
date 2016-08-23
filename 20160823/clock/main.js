/**
 * Created by Administrator on 2016/8/23 0023.
 */

//输出时间？然后使得各自对应的指针按照时间来转动

(function () {

    var container = document.querySelector("#container");
    var hour = document.querySelector("#container .hour");
    var min = document.querySelector("#container .min");
    var sec = document.querySelector("#container .sec");

    var dt = new Date();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();  
    
    function setPosition() {
        sec.style.transform = "rotate(" + (s * 6 - 90) + "deg)";
        min.style.transform = "rotate(" + (m * 6 + 1 / 10 * s - 90) + "deg)";
        hour.style.transform = "rotate(" + (h * 30 + 1 / 2 * m + 1 / 120 * s - 90) + "deg)";
        container.innerHTML = h + ":" + m + ":" + s;
    }
    

})();