// Enemies the player must avoid
class Enemy {
    constructor(x, y) {
        // Enemy Image
        this.sprite = 'images/enemy-bug.png';
        // Enemy Placement and Speed
        this.x = x;
        this.y = y;
        this.speed = Math.floor((Math.random() * 200) + 200);
    }
    // Enemy Animation 
    update(dt) {
        // Keep image on screen 
        if (this.x <= 550) {
            this.x += this.speed * dt;
        }
        else {
            this.x = -2;
        }
        //Enemy Collision Parameters
        if (player.x >= this.x - 40 && player.x <= this.x + 60) {
            if (player.y >= this.y - 30 && player.y <= this.y + 50) {
                this.reset();
            }
        }
    }
}


// Player Starting Point
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
    }
    //Player Movement
    update() {
        // Move Player Left On Screen
        if (this.ctlKey === 'left' && this.x > 0) {
            this.x = this.x - 50;
            //Move Player Right On Screen
        }
        else if (this.ctlKey === 'right' && this.x != 400) {
            this.x = this.x + 50;
            //Move Player Up On Screen
        }
        else if (this.ctlKey === 'up') {
            this.y = this.y - 50;
            //Move Player Down On Screen
        }
        else if (this.ctlKey === 'down' && this.y != 400) {
            this.y = this.y + 50;
        }
        this.ctlKey = null;
        //If on water, reset
        if (this.y < 50) {
            this.reset();
            alert(" You Won! Do You Wish To Play Again?");
        }
    }
    // Keys to control player 
    handleInput(e) {
        this.ctlKey = e;
    }
}

const newLocal = Object.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const newLocal_2 = Object.prototype.reset = function () {
    player.x = 100;
    player.y = 400;
};

// Load Enemie and Player Image
const allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-2, 60));
    allEnemies.push(new Enemy(-2, 100));
    allEnemies.push(new Enemy(-2,150));
    allEnemies.push(new Enemy(-2,220));
}());

const player = new Player(); 


// Keystroke event listener
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});