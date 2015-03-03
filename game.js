/**
 * Created by dimapct on 12.02.2015.
 */

$.getScript("config.js");
$.getScript("world.js");
var canvas, context;
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

function Game(worldWidth, worldHeight, cellSize, fps) {
    this.width = worldWidth; // cells in a row
    this.height = worldHeight; // cells in a column
    this.cellSize = cellSize;

    this.setGameWindowSize();
    this.world = new World(worldWidth, worldHeight, cellSize);
    this.fps = fps;
    //document.write(":GameInitEnd:")
}

Game.prototype = {
    loop: function () {
        //document.write("loop");
        this.update();
        //document.write("loop_2");
        this.draw();
        //document.write("loop_3");
    },

    update: function () {
        message = this.getServerMessage();
        //document.write(5);
        //document.write(this.height);        //document.write("kkkk")
    },

    draw: function () {
        var cells = this.world.gameMap.cells;
        for (var y = 0; y < cells.length; y++) {
            var row = cells[y];
            for (var x = 0; x < row.length; x++) {
                var cell = row[x];
                cell.draw(context);
            }
        }
        },

    setGameWindowSize: function () {
        var worldWidth = inputMap[0].length;
        var worldHeight = inputMap.length;

        canvas.width = worldWidth * 50;
        canvas.height = worldHeight * 50;
    },

    getServerMessage: function () {
        //var request = new XMLHttpRequest();
        //
        //
        //
        //request.open("GET", requestAddress);
        //
        //request.onreadystatechange = function () {
        //    if (request.readyState == 4) {
        //        var type = request.getResponseHeader("Content-Type")
        //        document.write("Status: " + request.status + "</br>");
        //        document.write("StatusText: " + type + "</br>");
        //        //if
        //        document.write("responseText: " + typeof (JSON.parse(request.responseText)) + "</br>");
        //        document.write("readyState: " + request.readyState + "</br>");
        //    }
        //};

        //request.send();



        return {"<0.163.0>":{"x":80,"y":140}, "<0.162.0>":{"x":35,"y":500}};
    }
};

var worldWidth = inputMap[0].length;
var worldHeight = inputMap.length;

game = new Game(worldWidth, worldHeight, 50, 2000);
setInterval(function () {game.loop()}, game.fps);