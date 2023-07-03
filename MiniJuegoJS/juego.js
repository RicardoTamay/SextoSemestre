//definimos las variables a usar
var game;
var player;
var platforms;
var Platforms2;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 0;
var winningScore = 100;

//agregar los objetos coleccionables en el juego.
function addItems() {
    items = game.add.physicsGroup();
    createItem(330, 150, 'coin');
    createItem(250, 150, 'coin2');
    createItem(450, 550, 'coin3');
    createItem(530, 550, 'coin4');
    createItem(475, 300, 'coin5');
    createItem(750, 390, 'coin6');
    createItem(780, 390, 'coin7');
    createItem(810, 390, 'coin8');
    createItem(525, 300, 'coin9');
    createItem(225, 370, 'coin10');
    createItem(100, 350, 'poison');
    createItem(800, 200, 'poison1');
}
// agregar las plataformas en el juego
function addPlatforms() {
    platforms = game.add.physicsGroup();
    platforms.create(400,600, 'platform');
    platforms.create(450, 350, 'platform2');
    platforms.create(150, 475, 'platform3');
    platforms.create(700, 475, 'platform4');
    platforms.create(200,200, 'platform5');
    platforms.create(200,650, 'platform6');
    platforms.setAll('body.immovable', true);
}

//crear animacion de objetos para mostrar en la pantalla
function createItem(left, top, image) {
    var item = items.create(left, top, image);
    item.animations.add('spin');
    item.animations.play('spin', 10, true);

}


//crear insignia ganadora y agregarla en la pantalla
function createBadge() {
    badges = game.add.physicsGroup();
    var badge = badges.create(750, 400, 'badge');
    badge.animations.add('spin');
    badge.animations.play('spin', 10, true);

}


//cuando el jugador recolecte un objeto obtiene puntos.
function itemHandler(player, item) {
    item.kill();
    currentScore = currentScore + 10;
    if (currentScore == winningScore) {

        createBadge();
    }
}
//cuando el jugador recolecta la insignia al final del juego.
function badgeHandler(player, badge) {
    badge.kill();
    won = true;
}
//iniciar el juego cuando la pagina carga.
window.onload = function() {

    game = new Phaser.Game(1000, 700, Phaser.AUTO, '', { preload: preload, create: create, 
        update: update, render: render });

//Antes que inicie el juego.
    function preload() {
        game.stage.backgroundColor = '#2476e4';


//se carga las imagenes
        game.load.image('platform', 'platform_1.png');
        game.load.image('platform2', 'platform_2.png');
        game.load.image('platform3', 'platform_3.png');
        game.load.image('platform4', 'platform_3.png');
        game.load.image('platform5', 'platform_1.png');
        game.load.image('platform6', 'tubo.png');
      
    

//se carga los sprites
        game.load.spritesheet('player', 'chalkers.png', 48, 62);
        game.load.spritesheet('coin', 'coin.png', 36, 44);
        game.load.spritesheet('badge', 'badge.png', 42, 54);
        game.load.spritesheet('coin2', 'coin.png', 36, 44);
        game.load.spritesheet('coin3', 'coin.png', 36, 44);
        game.load.spritesheet('coin4', 'coin.png', 36, 44);
        game.load.spritesheet('coin5', 'coin.png', 36, 44);
        game.load.spritesheet('coin6', 'coin.png', 36, 44);
        game.load.spritesheet('coin7', 'coin.png', 36, 44);
        game.load.spritesheet('coin8', 'coin.png', 36, 44);
        game.load.spritesheet('coin9', 'coin.png', 36, 44);
        game.load.spritesheet('coin10', 'coin.png', 36, 44);
        game.load.spritesheet('poison', 'poison.png', 32, 32 );
        game.load.spritesheet('poison1', 'poison.png', 32, 32 );

    }

// configuracion inicial del juego
    function create() {
        player = game.add.sprite(50, 600, 'player');
        player.animations.add('walk');
        player.anchor.setTo(0.5, 1);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.gravity.y = 500;

        addItems();
        addPlatforms();
    
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
        winningMessage = game.add.text(game.world.centerX, 275, "", 
        { font: "bold 48px Arial", fill: "white" });
        winningMessage.anchor.setTo(0.5, 1);
    }

//cuando el juego esta corriendo.
    function update() {
        text.text = "SCORE: " + currentScore;
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.overlap(player, items, itemHandler);
        game.physics.arcade.overlap(player, badges, badgeHandler);
        player.body.velocity.x = 0;
//si la tecla flecha izquierda es presionada avanza ala izquierda el personaje.
        if (cursors.left.isDown) {
            player.animations.play('walk', 10, true);
            player.body.velocity.x = -300;
            player.scale.x = -1;
//si la tecla flecha derecha es presionada avanza a la derecha el personaje.
        } else if (cursors.right.isDown) {
            player.animations.play('walk', 10, true);
            player.body.velocity.x = 300;
            player.scale.x = 1;

// cuando el jugador esta detenido
        } else {

            player.animations.stop();

        }
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
            player.body.velocity.y = -400;
        }
//cuando el jugador gana el juego
        if (won) {
            winningMessage.text = "*HAS DINOGANADO*"


        }
    }

    function render() {


    }

};
