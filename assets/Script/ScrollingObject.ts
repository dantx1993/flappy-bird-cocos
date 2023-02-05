import { _decorator, Component, Node, CCFloat, Vec3 } from 'cc';
import { GameConfig } from './GameConfig';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('ScrollingObject')
export class ScrollingObject extends Component {

    update(deltaTime: number) {
        if (GameManager.Instance.isGameOver) return;
        this.node.translate(new Vec3(GameConfig.Instance.scrollingSpeed * deltaTime, 0, 0));
    }
}


