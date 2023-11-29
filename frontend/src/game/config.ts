// Phaserの設定

import {Game} from "@/game/main";

export const pharseConfig: Phaser.Types.Core.GameConfig = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    pixelArt: false,
    backgroundColor: 0xcdcdcd,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_VERTICALLY,
        parent: 'game',
        fullscreenTarget: 'game'
    },

    scene: [Game],
};