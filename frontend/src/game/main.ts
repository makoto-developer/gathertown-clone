import 'phaser'
import {map_ground} from "@/game/tiles";

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
export default class MainScene extends Phaser.Scene {

    private map?: Phaser.Tilemaps.Tilemap
    private tiles?: Phaser.Tilemaps.Tileset | null
    private map_ground_layer?: Phaser.Tilemaps.TilemapLayer | null

    constructor() {
        super({
            key: 'Main',
        })
    }

    /**
     * 初期処理
     */
    init(): void {
        console.log("init")
        this.load.image('mapTiles', 'assets/pipo-charachip021b.png') // 追加
    }

    /**
     * アセットデータ読込などを行う処理
     */
    preload(): void {
        console.log("preload")
        this.load.setPath("assets")

    }

    /**
     * ゲーム画面の作成処理やイベントアクションを記述する処理
     */
    create(): void {
        console.log("create")
        this.add.text(100, 100, "Hello, phaser")

        this.map = this.make.tilemap({data: map_ground, tileWidth: 40, tileHeight: 40}) // タイルマップ生成
        this.tiles = this.map.addTilesetImage(`mapTiles`) // マップチップ画像のキーを渡す
        this.map_ground_layer = this.map.createLayer('ground', this.tiles, 0, 0)
        // createStaticLayer(0, this.tiles, 0, 0) // レイヤー作成

    }

    /**
     * メインループ
     */
    update(): void {
    }
}
