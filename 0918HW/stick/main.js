/**
 * Created by Administrator on 2016/9/18 0018.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    otex.save();
    otex.beginPath();
    otex.font = "16pt Calibri";
    otex.fillStyle = "#fff";
    otex.fillText("0", 140, 16);

    //ˢ��ʱ�����������Σ�Ȼ�����һ��һ��ͳһ�����ƣ��������
    //otex.save();
    //otex.beginPath();
    //otex.rect(0, 100, 80, 50);
    //otex.fillStyle = "black";
    //otex.fill();
    //otex.restore();
    //
    //otex.save();
    //otex.beginPath();
    //otex.rect(150, 100, 50, 50);
    //otex.fillStyle = "black";
    //otex.fill();
    //otex.restore();

    function drawRect(ox, oy, owidth, oheight) {
        otex.save();
        otex.beginPath();
        otex.rect(ox, oy, owidth, oheight);
        otex.fillStyle = "black";
        otex.fill();
        otex.restore();
    }
    drawRect(0, 100, 80, 50);
    drawRect(150, 100, 50, 50);
    drawRect(280, 100, 70, 50);

    //��ɫ���Σ����ƶ�
    otex.save();
    otex.beginPath();
    otex.rect(50, 92, 26, 8);
    otex.fillStyle = "red";
    otex.fill();
    otex.restore();

//    ��ס�ո�������ӣ�up����ֹͣ������Ȼ��������ת��������һ������Ϊֹ��������ɺ�ɫ
//    Ȼ���ɫ���������ƣ�������һ�����λ��߳�����һ�����ζ�ʧ��

    //otex.save();
    //otex.beginPath();
    //otex.lineWidth = 3;
    //otex.moveTo(78, 100);
    //otex.lineTo(78, 80);
    //otex.strokeStyle = "yellow";
    //otex.stroke();
    //otex.restore();

    //�ո�ס��ֱ���������ո��뿪��ת  һ��keydown����    һ��keyup����
    function onKeyDown(){
        otex.save();
        otex.beginPath();
        otex.lineWidth = 3;
        otex.moveTo(78, 100);
        otex.lineTo(78, 80);
        otex.strokeStyle = "yellow";
        otex.stroke();
        otex.restore();
    }


})();