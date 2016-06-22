/**
 * Created by pierreportejoie on 02/03/15.
 */

var canvas,
    ctx,
    ensemble,
    iterator = 0,
    boundy = 1200,
    boundx = 1200;

window.requestAnimFrame =
    /*window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||*/
    function (callback) {
        window.setTimeout(callback, 2500 / 60);
    };

window.onload = function(){
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');
    canvas.width = boundx;
    canvas.height = boundy;
    start();
};

function start(){
    ensemble = new Ensemble;
    ensemble.init(12);
    ensemble.render();
    update();

}

function update(){
    iterator++;
    ensemble.update();
    ensemble.render();
    requestAnimFrame(update);
}


var Ensemble = function(){
    this.diameter = boundx/4;
    this.angles = [];
};

Ensemble.prototype.render = function(){
    ctx.clearRect(0,0,boundx,boundy);
    var i = this.angles.length;
    while (i--){
        //draw(this.angles[i],this.diameter);
        //drawProj(this.angles[i],this.diameter);
        drawRuby(this.angles[i],this.diameter)
    }
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "overlay";
    gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    gradient.addColorStop(0.20, 'rgba(255, 0, 0, 1.000)');
    gradient.addColorStop(0.4, 'rgba(225, 255, 115, 1.000)');
    gradient.addColorStop(0.6, 'rgba(225, 255, 115, 1.000)');
    gradient.addColorStop(0.80, 'rgba(255, 0, 0, 1.000)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


};

Ensemble.prototype.init = function(n){
    for (var i= 0; i<n; i++){
        var angle = 2*Math.PI*i/n;
        this.angles.push(angle)
    }
};

Ensemble.prototype.update = function(){
    var i = this.angles.length;
    while(i--){
        this.angles[i]+=0.05/Math.PI;
        if (this.angles[i]>2*Math.PI) {this.angles[i]=this.angles[i]-2*Math.PI}
    }
};

function draw(angle,dia){
    ctx.beginPath();
    ctx.arc(boundx/2+dia*Math.cos(angle),150+dia*Math.sin(angle),5, 0, 2*Math.PI);
    ctx.stroke();
}

function drawProj(angle,dia){
    if (1){
        ctx.beginPath();
        ctx.arc(200+dia*Math.cos(angle),300,5, 0, 2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(350,150+dia*Math.sin(angle),5, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function drawRuby(angle,dia){
    if (1){
        ctx.strokeStyle = '#E84A5F';
        ctx.beginPath();
        ctx.moveTo(boundx/2,0);
        ctx.lineTo(boundx/2+dia*Math.cos(angle),boundy/3);
        ctx.moveTo(boundx/2+dia*Math.cos(angle),boundy/3);
        ctx.lineTo(boundx/2+dia*Math.cos(angle),2*boundy/3);
        ctx.moveTo(boundx/2+dia*Math.cos(angle),2*boundy/3);
        ctx.lineTo(boundx/2,boundy);
        ctx.stroke();
        ctx.strokeStyle = "#000000";
    }
}