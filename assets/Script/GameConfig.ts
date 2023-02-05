import { _decorator, Component, Node, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

export const pipeSpawnXPos: number = 1000;

@ccclass('GameConfig')
export class GameConfig extends Component
{
    @property({ type: CCFloat })
    scrollingSpeed = -100;
    @property({ type: CCFloat })
    pipeSpawnRate = 3;
    @property({ type: CCFloat })
    pipeMinY = -425;
    @property({ type: CCFloat })
    pipeMaxY = 220;

    public static Instance: GameConfig;

    start() {
        if (GameConfig.Instance == null) {
            GameConfig.Instance = this;
            return;
        } else if (GameConfig.Instance != this) {
            this.node.destroy();
        }
    }
}


