import { _decorator, Component, Node, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

export const pipeSpawnXPos: number = 1000;

@ccclass('GameConfig')
export class GameConfig extends Component
{
    @property({ type: CCFloat })
    scrollingSpeed = -1;
    @property({ type: CCFloat })
    pipeSpawnRate = 3;
    @property({ type: CCFloat })
    pipeMinY = -20;
    @property({ type: CCFloat })
    pipeMaxY = 150;

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


