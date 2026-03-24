import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        const path = 'assets/spritesheets';

        this.load.texture('cityscene', {
            'ASTC': {
                type: 'KTX',
                multiAtlasURL: `${path}/cityscene-astc.json`,
                multiPath: path,
            },
            'S3TC': {
                type: 'KTX',
                multiAtlasURL: `${path}/cityscene-dxt5.json`,
                multiPath: path,
            },
            'ETC': {
                type: 'KTX',
                multiAtlasURL: `${path}/cityscene-etc2.json`,
                multiPath: path,
            },
        });
    }

    create ()
    {
        // Compressed textures can't be premultiplied on upload (WebGL spec ignores
        // UNPACK_PREMULTIPLY_ALPHA_WEBGL for compressedTexImage2D), but Phaser's
        // default NORMAL blend mode assumes premultiplied alpha. Override it with
        // straight-alpha blending so semi-transparent pixels render correctly.
        const gl = this.renderer.gl;
        this.renderer.blendModes[0] = {
            func: [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA],
            equation: gl.FUNC_ADD
        };
        // Force Phaser to re-apply the blend func on next draw
        this.renderer.currentBlendMode = -1;

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
        this.add.nineslice(75, 50, 'cityscene', 'button.png', 100, 50);
        this.add.nineslice(250, 50, 'cityscene', 'button.png', 200, 50);
    }

    update(time, delta)
    {
        this.capguy.x += delta/10;
        if (this.capguy.x > 850)
        {
            this.capguy.x = -50;
        }
    }

}
