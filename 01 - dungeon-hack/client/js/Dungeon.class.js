'use strict';

class Dungeon {
    constructor(canvasSelector) {

        let canvas      = document.querySelector(canvasSelector);
        this.ctx    = canvas.getContext('2d');
        this.map        = null;

        canvas.width    = DUNGEON_MAP_WIDTH+1;
        canvas.height   = DUNGEON_MAP_HEIGHT+1;

        this.ctx.lineWidth = 1;
        this.ctx.translate(0.5, 0.5);

    }

    drawCell(x, y, hasNorthWall, hasEastWall, hasSouthWall, hasWestWall) {

        const xPixel = x*DUNGEON_CELL_SIZE;
        const yPixel = y*DUNGEON_CELL_SIZE;

        this.ctx.strokeStyle = 'black';
        this.ctx.beginPath();

        if(hasNorthWall === true) {
            this.ctx.moveTo(xPixel,yPixel);
            this.ctx.lineTo(xPixel+DUNGEON_CELL_SIZE,yPixel);
        }
        if(hasEastWall === true) {
            this.ctx.moveTo(xPixel+DUNGEON_CELL_SIZE,yPixel);
            this.ctx.lineTo(xPixel+DUNGEON_CELL_SIZE,yPixel+DUNGEON_CELL_SIZE);
        }
        if(hasSouthWall === true) {
            this.ctx.moveTo(xPixel,yPixel+DUNGEON_CELL_SIZE);
            this.ctx.lineTo(xPixel+DUNGEON_CELL_SIZE,yPixel+DUNGEON_CELL_SIZE);
        }
        if(hasWestWall === true) {
            this.ctx.moveTo(xPixel,yPixel);
            this.ctx.lineTo(xPixel,yPixel+DUNGEON_CELL_SIZE);
        }

        this.ctx.closePath();
        this.ctx.stroke();

    }

    loadMap(map) {
        if(map !== null) {
            this.map = map;
        }
    }

    drawMap() {
        this.ctx.clearRect(-1, -1, this.ctx.canvas.width + 1, this.ctx.canvas.height + 1);

        for(let y=0; y < DUNGEON_CELL_MAX_Y; y++) {
            for(let x=0; x < DUNGEON_CELL_MAX_X; x++) {
                this.drawCell(x, y, this.map[y][x].n, this.map[y][x].e, this.map[y][x].s, this.map[y][x].w);
            }
        }
    }
}