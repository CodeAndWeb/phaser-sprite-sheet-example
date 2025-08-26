import { Game as MainGame } from './scenes/Game';
import { AUTO, Scale,Game } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#028af8',
    // scale: {
    //     mode: Scale.FIT,
    //     autoCenter: Scale.CENTER_BOTH
    // },
    scene: [
        MainGame
    ]
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
}

export default StartGame;
