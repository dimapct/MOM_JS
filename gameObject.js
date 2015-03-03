/**
 * Created by dimapct on 15.02.2015.
 */


function GameObject(id, objectType, xy){
    this.id = id;
    this.objectType = objectType;
    this.xy = xy;
}
GameObject.prototype = {
    draw: function() {
        if (this.objectType == "player"){

        }

        else if (this.objectType == "enemy") {

        }

        else throw TypeError
    }
};


