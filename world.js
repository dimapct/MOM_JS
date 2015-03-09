/**
 * Created by dimapct on 15.02.2015.
 */

$.getScript("gameObject.js");
$.getScript("gameMap.js");

function World(width, height, cellSize) {
    //document.write("WorldInitStart");
    this.allGameObjects = {tttt: 12345};
    this.gameMap = new GameMap(width, height, cellSize);
    //document.write("WorldInitEnd");
}

World.prototype = {
    createGameObject: function(data) {
        console.log("World is creating object")
        var objectType = data["type"];
        var id = data["Id"];
        var position = data["Position"];
        var direction = data["Direction"];
        var obj;

        if (objectType == "NPC") {
            obj = new GameObject(id, objectType, position, direction)
        }

        else if (objectType == "player") {
            obj = new GameObject(id, objectType, position, direction)
        }

        else throw "invalid gameObject type";

        this.allGameObjects[id] = obj
    }
};