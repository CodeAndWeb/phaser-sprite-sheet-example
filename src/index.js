import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.multiatlas('cityscene', 'assets/spritesheets/cityscene.json', 'assets/spritesheets');
    }

    create()
    {
        // background
        this.add.sprite(0, 0, 'cityscene', 'background.png');

        // sprite
        this.capguy = this.add.sprite(0, 400, 'cityscene', 'capguy/walk/0001.png');
        this.capguy.setScale(0.5, 0.5);

        // animation
        const frameNames = this.anims.generateFrameNames('cityscene', {
            start: 1, end: 8, zeroPad: 4,
            prefix: 'capguy/walk/', suffix: '.png'
        });
        this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
        this.capguy.anims.play('walk');

        // 9-slice objects
        this.add.nineslice(75, 50,'cityscene', 'button.png', 100, 50);
        this.add.nineslice(250, 50,'cityscene', 'button.png', 200, 50);
    }

    update(time, delta)
    {
        this.capguy.x += delta/10;
        if(this.capguy.x > 800)
        {
            this.capguy.x = -50;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
