/**
 * Created by Administrator on 2016/9/13 0013.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 260, 0, 2 * Math.PI);
    otex.lineWidth = 60;
    otex.strokeStyle = "#CD2E3E";
    otex.stroke();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 200, 0, 2 * Math.PI);
    otex.lineWidth = 60;
    otex.strokeStyle = "#fff";
    otex.stroke();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 140, 0, 2 * Math.PI);
    otex.lineWidth = 60;
    otex.strokeStyle = "#CD2E3E";
    otex.stroke();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 110, 0, 2 * Math.PI);
    otex.fillStyle = "#02468D";
    otex.fill();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.moveTo(300,200);
    for (var i = 0; i < 6; i++) {
        var ox = 110 * Math.cos(i * 144 * Math.PI / 180 - Math.PI / 2) + 300;
        var oy = 110 * Math.sin(i * 144 * Math.PI / 180 - Math.PI / 2) + 300;
        otex.lineTo(ox, oy);
    }
    otex.closePath();
    otex.stroke();
    otex.fillStyle = "#fff";
    otex.fill();

})();