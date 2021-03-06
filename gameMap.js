/**
 * Created by dimapct on 17.02.2015.
 */

function Cell(xy, size, terrain) {
    this.X = xy[0];
    this.Y = xy[1];
    this.canvasX = this.X;
    this.canvasY = this.Y;
    this.width = size;
    this.height = size;
    this.terrain = terrain || 'meadow';
}

Cell.prototype = {
    draw: function(context) {
        context.clearRect(this.canvasX, this.canvasY, this.width, this.height);
        var terrainID = terrainClass[this.terrain];
        context.fillStyle = terrainClass.props[terrainID].color;
        context.fillRect(this.canvasX, this.canvasY, this.width, this.height);
    }
};


function GameMap(width, height, cellSize) {
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