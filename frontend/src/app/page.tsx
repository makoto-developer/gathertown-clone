'use client'

import {CSSProperties, useEffect} from "react";
import {pharseConfig} from "@/game/config";

class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

/**
 * ゲームを描写するDivコンポーネント
 */
export default function App() {    // お手軽にCSSの設定（フルスクリーンで、Canvasを中央寄せにする）
    const style: CSSProperties = {
        width: "100%",
        height: '100vh',
    }

    // 画面の発描写時に実行する
    // 画面の終了時にはGameをDestroyする
    useEffect(() => {
        const g = new Game(pharseConfig)
        return () => {
            g?.destroy(true)
        }
    }, []);

    // canvasをAppendするdivコンポーネント
    return (
        <div id="game" style={style}>
        </div>
    )
}
