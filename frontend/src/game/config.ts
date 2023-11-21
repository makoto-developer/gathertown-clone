// Phaserの設定
import MainScene from "@/game/main";

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

    // ここで読み込むシーンを取得する
    // 今回は軽いテストなので、MainSceneのみ
    scene: [MainScene],
};