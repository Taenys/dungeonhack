'use strict';

class Player {
    constructor(canvasSelector) {

        let canvas      = document.querySelector(canvasSelector);
        this.ctx    = canvas.getContext('2d');

        this.x          = 0;
        this.y          = 0;

        $(document).on('keyup', this.onKeyUpMovePlayer.bind(this));

    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc((this.x*DUNGEON_CELL_SIZE)+16,(this.y*DUNGEON_CELL_SIZE)+16,10,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

    onKeyUpMovePlayer(event) {
        let moveX=0;
        let moveY=0;
        switch(event.keyCode){
            case 38:
                console.log('top');
                moveY--;
                break;
            case 39:
                console.log('right');
                moveX++;
                break;
            case 40:
                console.log('bottom');
                moveY++;
                break;
            case 37:
                console.log('left');
                moveX--;
                break;
        }
        this.x += moveX;
        this.y += moveY;

        console.log(this.x + ' ' + this.y);
    }
}