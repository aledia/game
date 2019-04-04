var Game = {

    canvas: undefined,
    ctx: undefined,
    w: 750,
    h: 400,
    intervalID: '',
    counter: 0,
    frameCounter: undefined,
    arrayFire: [],
    enemyCounter:0,



    initGame: function () {

        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.frameCounter = 340;
        this.arrayEnemy = [];
        this.startGame();
    },

    reset: function () {

        this.player = new Player(10, 20, this.ctx)
        this.khalessi = new Khalessi (10, 315, this.ctx)


        this.background = new Background(this.ctx, this.w, this.h);
        this.bullet = new Bullet(this)

    },

    startGame: function () {
        this.reset();
        this.movement();
        this.intervalID = setInterval(() => {
            this.frameCounter++;
            if (this.frameCounter % 550 == 0) {
                this.generateEnemy();

            }

            //si diga que si he matado a 5 
            //crear una funcion que cambie img de bichos y fondos
            this.clearScreen();
            this.background.draw();
            this.player.draw();
            this.khalessi.draw();
           
            
            this.arrayFire.forEach((bullet) => {
                bullet.draw()
                bullet.move()
                this.checkBulletCollision(bullet);

                

            });

            this.arrayEnemy.forEach(enemy => {
                enemy.draw();
                enemy.move();
                this.checkCollisionKhalessi();
                
            })
            this.clearEnemy();
            this.clearFire();


            this.counter++;
        }, 1000 / 60)

    },

    clearScreen: function () {
        this.ctx.clearRect(0, 0, this.w, this.h);
    },

    drawAll: function () {
        this.player.draw()
        this.khalessi.draw();
        
    },

    generateEnemy: function () {
        this.arrayEnemy.push(new Zombie(750, this.h - 85, this.ctx))
    },

    clearEnemy: function () {

        this.arrayEnemy = this.arrayEnemy.filter(enemy => {
            return enemy.x >= -100
        })

    },

    collision: function (a, b) {
        
        if (b.x < a.x + a.w &&
            a.x < b.x + b.w &&
            b.y < a.y + a.h &&
            a.y < b.y + b.h) return true;
        else return false;
    },

    //comprobar si colisiona a y b
    checkBulletCollision: function (bullet) {

        for (var i = 0; i < this.arrayEnemy.length; i++) {
            if (this.collision(bullet, this.arrayEnemy[i])) {
                this.arrayEnemy.splice(this.arrayEnemy[i], 1);
                this.enemyCounter++;

            }
        }
         //1-comprobar si una bala colisiona con enemigo
        //2-borro el enemigo que disparo

    },
    
    checkCollisionKhalessi: function () {
        for (var i = 0; i < this.arrayEnemy.length; i++) {
            if (this.collision(this.khalessi, this.arrayEnemy[i])) {
                clearInterval(this.intervalID)
               alert ("Has perdido")

            }
        }
         //si colisiona khalessi y caminante, game over

    },
      

    fire: function () {

        if (this.arrayFire.length < 7) {

            this.arrayFire.push(new Bullet(this))
        }
    },

    clearFire: function () {
         this.arrayFire = this.arrayFire.filter(fire => {
             return fire.y < 400;
         })
     },

     limit: function () {
         if (this.player.posY == 300) {
           this.player.posY = 300;
         };
        },

        //  if (this.player.posY < 0 - 2 * this.player) {
        //    this.player.posY = this.h;
        //  }
        //  if (this.player.posX == this.w) {
        //    this.player.posX = 0 - 2 * this.player;
        //  }
        //  if (this.player.posX < 0 - 2 * this.player) {
        //    this.player.posX = this.w;
        //  }
      

    movement: function () {
        window.onkeydown = (e) => {
            switch (e.keyCode) {
                case 37:
                    this.player.x -= 5;
                    if (this.player.x <= 0) {
                        this.player.x += 5;
                    }
                    // if(x > 0){
                    // this.player.x-=5}
                    break;

                case 39:
                    this.player.x += 5;
                    if (this.player.x + 150 >= 750) {
                        this.player.x -= 5;
                    }
                    break;

                case 38:

                    if (this.player.y >= 0) {
                        this.player.y -= 5;
                    }
                    break;

                case 40:
                    this.player.y += 5
                    if (this.player.y + 150 >= 400) {
                        this.player.y -= 5;
                    }
                    break;

                case 32:
                    this.fire();
                    break;
            }
        };
    }
};