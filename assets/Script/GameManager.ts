import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    public static Instance: GameManager;

    public isGameOver: boolean = false;
    public score: number = 0;

    start() {
        if (GameManager.Instance == null) {
            GameManager.Instance = this;
        } else if (GameManager.Instance != this) {
            this.node.destroy();
        }
    }

    update(deltaTime: number) {
        
    }

    private scored() {
        if (this.isGameOver) {
            return;
        }
        this.score++;
    }
}


