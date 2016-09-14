/**
 * Created by Administrator on 2016/9/13 0013.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 300, 0, 2 * Math.PI);
    otex.fillStyle = "#ADFF2E";
    otex.fill();
    otex.closePath();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 300, 0, Math.PI);
    otex.fillStyle = "#FF0000";
    otex.fill();
    otex.closePath();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 300, Math.PI / 4, Math.PI * (5 / 4));
    otex.fillStyle = "#FFFF00";
    otex.fill();
    otex.closePath();

    otex.save();
    otex.beginPath();
    otex.arc(300, 300, 300, Math.PI * (5 / 6), Math.PI * (11 / 6));
    otex.fillStyle = "#ADFF2E";
    otex.fill();
    otex.closePath();

})();