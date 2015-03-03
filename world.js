/**
 * Created by dimapct on 15.02.2015.
 */

$.getScript("gameObject.js");
$.getScript("gameMap.js");

function World(width, height, cellSize) {
    //document.write("WorldInitStart");
    this.allObjects = {};
    this.gameMap = new GameMap(width, height, cellSize);
    //document.write("WorldInitEnd");
}

World.prototype = {
    createGameObject: function(data) {
        var objectType = data["type"];
        if (objectType == "enemy") {
            return {name: "enemy"};
        }

        else if (objectType == "player") {
            return {name: "player"};
        }

        else throw "invalid gameObject type";
    }
};

//document.write("888")
//var w = new World(5, 6, 10);
//var g = new GameMap(10, 10, 10);
//document.write("999")


