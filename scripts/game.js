var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        gravity: {
            y: 200
        }
    },
    backgroundColor: 0xfcba03,
    scene: {
        preload,
        create,
    }
}

function preload() {
    this.load.image('sky', './styles/sky.png');
    this.load.image('logo', './styles/logo.png');
    this.load.image('particle', './styles/white-smoke.png');
}

function create() {
    this.add.image(400, 400, 'sky');

    var particles = this.add.particles('particle');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: {
            start: 1,
            end: 0
        },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(500, 200, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}

var game = new Phaser.Game(config)

// var config = {
//     type: Phaser.AUTO,
//     width: 1000,
//     height: 800,
//     backgroundColor: 0xfcba03,
//     scene: {
//         preload,
//         create,
//         update
//     }
// }

//var game = new Phaser.Game(config)

// var gameState = {}

// function preload() {
//     this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
// }

// function create() {
//     gameState.codey = this.add.sprite(400, 400, 'codey');
//     gameState.cursorW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
//     gameState.cursorS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
//     gameState.cursorA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
//     gameState.cursorD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
// }

// function update() {
//     if (gameState.cursorW.isDown) {
//         gameState.codey.y -= 5;
//     } else if (gameState.cursorS.isDown) {
//         gameState.codey.y += 5;
//     } else if (gameState.cursorA.isDown) {
//         gameState.codey.x -= 5;
//     } else if (gameState.cursorD.isDown) {
//         gameState.codey.x += 5;
//     }
// }

// var game = new Phaser.Game(config);