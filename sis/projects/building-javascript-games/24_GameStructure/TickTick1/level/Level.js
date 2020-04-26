"use strict";

function Level(levelIndex, id) {
    powerupjs.GameObjectList.call(this, id);

    this._levelIndex = levelIndex;
    this._waterdrops = new powerupjs.GameObjectList(ID.layer_objects);

    this._quitButton = new powerupjs.Button(sprites.button_quit, ID.layer_overlays);
    this._quitButton.position = new powerupjs.Vector2(powerupjs.Game.size.x - this._quitButton.width - 10, 10);
    this.add(this._quitButton);

    this.add(this._waterdrops);

    // backgrounds
    var backgrounds = new powerupjs.GameObjectList(ID.layer_background);
    var background_main = new powerupjs.SpriteGameObject(sprites.background_sky, ID.layer_background_1);
    background_main.position = new powerupjs.Vector2(0, powerupjs.Game.size.y - background_main.height);
    backgrounds.add(background_main);
    this.add(backgrounds);

    this.loadTiles();
}

Level.prototype = Object.create(powerupjs.GameObjectList.prototype);

Level.prototype.loadTiles = function () {
    var levelData = window.LEVELS[this._levelIndex];

    var hintField = new powerupjs.GameObjectList(ID.layer_overlays);
    this.add(hintField);
    var hintFrame = new powerupjs.SpriteGameObject(sprites.frame_hint, ID.layer_overlays_1);
    hintField.position = new powerupjs.Vector2(hintFrame.screenCenterX, 10);
    hintField.add(hintFrame);
    var hintText = new powerupjs.Label("Arial", "14pt", ID.layer_overlays_2);
    hintText.text = levelData.hint;
    hintText.position = new powerupjs.Vector2(120, 25);
    hintText.color = powerupjs.Color.black;
    hintField.add(hintText);

    var tiles = new powerupjs.GameObjectGrid(levelData.tiles.length, levelData.tiles[0].length, 1, ID.tiles);
    this.add(tiles);
    tiles.cellWidth = 72;
    tiles.cellHeight = 55;
    for (var y = 0, ly = tiles.rows; y < ly; ++y)
        for (var x = 0, lx = tiles.columns; x < lx; ++x) {
            var t = this.loadTile(levelData.tiles[y][x], x, y);
            tiles.add(t, x, y);
        }
};

Level.prototype.loadTile = function (tileType, x, y) {
    switch (tileType) {
        case '.':
            return new Tile();
        case '-':
            return this.loadBasicTile(sprites.platform, TileType.platform);
        case '+':
            return this.loadBasicTile(sprites.platform_hot, TileType.platform, true, false);
        case '@':
            return this.loadBasicTile(sprites.platform_ice, TileType.platform, false, true);
        case 'X':
            return this.loadEndTile(x, y);
        case 'W':
            return this.loadWaterTile(x, y);
        case '#':
            return this.loadBasicTile(sprites.wall, TileType.normal);
        case '^':
            return this.loadBasicTile(sprites.wall_hot, TileType.normal, true, false);
        case '*':
            return this.loadBasicTile(sprites.wall_ice, TileType.normal, false, true);
        default:
            return new Tile();
    }
};

Level.prototype.loadBasicTile = function (id, tileType, hot, ice) {
    var t = new Tile(id, tileType);
    t.hot = hot;
    t.ice = ice;
    return t;
};

Level.prototype.loadEndTile = function (x, y) {
    var tiles = this.find(ID.tiles);
    var exit = new powerupjs.SpriteGameObject(sprites.goal, ID.layer_objects, ID.exit);
    exit.position = new powerupjs.Vector2(x * tiles.cellWidth, (y + 1) * tiles.cellHeight);
    exit.origin = new powerupjs.Vector2(0, exit.height);
    this.add(exit);
    return new Tile();
};

Level.prototype.loadWaterTile = function (x, y) {
    var tiles = this.find(ID.tiles);
    var w = new WaterDrop(ID.layer_objects);
    w.origin = w.center.copy();
    w.position = new powerupjs.Vector2((x + 0.5) * tiles.cellWidth, (y + 0.5) * tiles.cellHeight - 10);
    this._waterdrops.add(w);
    return new Tile();
};

Level.prototype.handleInput = function (delta) {
    powerupjs.GameObjectList.prototype.handleInput.call(this, delta);

    if (!this._quitButton.pressed)
        return;
    this.reset();
    powerupjs.GameStateManager.switchTo(ID.game_state_levelselect);
};