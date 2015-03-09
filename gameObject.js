/**
 * Created by dimapct on 15.02.2015.
 */


function GameObject(id, objectType, position, direction){
    this.id = id;
    this.objectType = objectType;
    this.xy = position;
    this.canvasXY = this.xy;
    this.direction = direction;
}
GameObject.prototype = {
    draw: function(context) {
        console.log("GameObject Draw: " + this.objectType);
        if (this.objectType == "player"){
            context.fillStyle = "red";
            context.fillRect(this.xy.X, this.xy.Y, 20, 20);

        }

        else if (this.objectType == "NPC") {
            context.fillStyle = "black";
            context.fillRect(this.xy.X, this.xy.Y, 20, 20);
        }

        else throw "invalid gameObject type";
    }
};


