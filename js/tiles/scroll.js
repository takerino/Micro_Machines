

var mapType = 1;
var file = '../plan/med_tile.svg';

var startPosition = [[1320, 900],
                    [2520, 900],
                    [2520, 900]
];

var seconds;

var map = {
    cols: [19, 29, 29],
    rows: [19, 18, 20],
    tsize: 100, 
    layers: [[  
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1, 1, 
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1,  
        1, 2, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 4, 1, 1, 1,  
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1,
        1, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 4, 1, 1, 1, 
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 
        1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1, 1,   
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  
    ], [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1, 
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1,   
        1, 2, 3, 3, 3, 8, 8, 8, 8, 3, 3, 3, 4, 1, 1, 1, 2, 3, 3, 8, 8, 8, 8, 8, 3, 3, 4, 1, 1,   
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 5, 5, 5, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 4, 1, 1,    
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1,   
        1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1,     
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ], [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1,  
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1,   
        1, 2, 3, 3, 3, 8, 8, 8, 8, 3, 3, 3, 4, 1, 1, 1, 2, 3, 3, 8, 8, 8, 8, 8, 3, 3, 4, 1, 1,   
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 5, 5, 5, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1,
        1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 8, 8, 8, 8, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 4, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 
        1, 2, 3, 3, 3, 5, 5, 5, 5, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 5, 5, 5, 5, 5, 3, 3, 4, 1, 1,    
        1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1,   
        1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1, 1, 1, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 1, 1,    
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]


],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols[mapType] + col];
    },

    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(mapType, col, row);
            var isSolid = tile === 1 ;
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }    
};

function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols[mapType] * map.tsize - width;
    this.maxY = map.rows[mapType] * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
};

Camera.prototype.update = function () {
    
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;

    // make the camera follow the sprite
    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // left and right sides
    if (this.following.x < this.width / 2 ||
        this.following.x > this.maxX + this.width / 2) {
        this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
        this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
    }
};

function Hero(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;

    this.image = Loader.getImage('hero');
}

Hero.SPEED = 256; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {
    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;

    // check if we walked into a non-walkable tile
    this._collide(dirx, diry);

    // clamp values
    var maxX = this.map.cols[mapType] * this.map.tsize;
    var maxY = this.map.rows[mapType] * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._collide = function (dirx, diry) {
    var row, col;
    // -1 in right and bottom is because image ranges from 0..63
    // and not up to 64
    var left = this.x - this.width / 2;
    var right = this.x + this.width / 2 - 1;
    var top = this.y - this.height / 2;
    var bottom = this.y + this.height / 2 - 1;

    // check for collisions on sprite sides
    var collision =
        this.map.isSolidTileAtXY(left, top) ||
        this.map.isSolidTileAtXY(right, top) ||
        this.map.isSolidTileAtXY(right, bottom) ||
        this.map.isSolidTileAtXY(left, bottom);
    if (!collision) { return; }

    if (diry > 0) {
        row = this.map.getRow(bottom);
        this.y = -this.height / 2 + this.map.getY(row);
    }
    if (diry < 0) {
        row = this.map.getRow(top);
        this.y = this.height / 2 + this.map.getY(row + 1);
    }
    if (dirx > 0) {
        col = this.map.getCol(right);
        this.x = -this.width / 2 + this.map.getX(col);
    }
    if (dirx < 0) {
        col = this.map.getCol(left);
        this.x = this.width / 2 + this.map.getX(col + 1);
    }
};

Camera.prototype.move = function (delta, dirx, diry) {
    // move camera
    this.x += dirx * Camera.SPEED * delta;
    this.y += diry * Camera.SPEED * delta;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
};


Game.load = function () {
    return [
        Loader.loadImage('tiles', '../img/plan/tiles_base.svg'),
        Loader.loadImage('hero', '../alias/auticko.svg'),
        Loader.loadImage('oponent', '../alias/zelene.svg'),
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');

    this.hero = new Hero(map, startPosition[mapType][0], startPosition[mapType][1]);
    this.camera = new Camera(map, 1030, 670);
    this.camera.follow(this.hero);
};

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

    this.hero.move(delta, dirx, diry);
    this.camera.update();
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) {
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    (tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};



Game.render = function () {
    // draw map background layer
    this._drawLayer(mapType);

    // draw main character
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2);

};