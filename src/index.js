import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var capguy;

function preload()
{
    this.load.multiatlas('cityscene', 'assets/cityscene.json', "assets");
}

function create()
{
    // background
    var background = this.add.sprite(0, 0, 'cityscene', 'background.png');

    // sprite
    capguy = this.add.sprite(0, 400, 'cityscene', 'capguy/walk/0001.png');
    capguy.setScale(0.5, 0.5);

    // animation
    var frameNames = this.anims.generateFrameNames('cityscene', { start: 1, end: 8, zeroPad: 4, prefix:'capguy/walk/', suffix:'.png' });
    this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
    capguy.anims.play('walk');
}

function update(time, delta)
{
    capguy.x += delta/8;
    if(capguy.x > 800)
    {
        capguy.x = -50;
    }
}
