/**
 * Created by dimapct on 17.02.2015.
 */

function Cell(xy, size, terrain) {
    this.x = xy[0];
    this.y = xy[1];
    this.width = size;
    this.height = size;
    this.terrain = terrain || 'meadow';
    //document.write(":Cell created:")
}

Cell.prototype = {
    draw: function(context) {
        context.clearRect(this.x, this.y, this.width, this.height);
        var terrainID = terrainClass[this.terrain];
        context.fillStyle = terrainClass.props[terrainID].color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};


function GameMap(width, height, cellSize) {
    //document.write("GameMapInitStart");
    this.width = width;
    this.height = height;
    this.cells = (function() {
        var cells = [];
        for (var y = 0; y < height; y++) {
            cells.push([]);
            var currentRow = cells[y];
            for (var x = 0; x < width; x++) {
                var gameX = x * cellSize;
                var gameY = y * cellSize;
                var cell = new Cell([gameX, gameY], cellSize);
                currentRow.push(cell)
            }
        }
        return cells})();
    this.create_terrain(inputMap);
    //document.write("GameMapInitEnd")
}

GameMap.prototype = {
    create_terrain: function(inputMap) {
        for (var y = 0; y < this.cells.length; y++) {
            var row = this.cells[y];
            for (var x = 0; x < row.length; x++) {
                var cell = row[x];
                cell.terrain = inputMap[y][x];
            }
        }
    }
};


//var g = new GameMap(10, 10, 10);