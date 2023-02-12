import { _decorator, Component, Node, CCFloat, Vec3, RigidBody2D, Vec2 } from 'cc';
import { GameConfig } from './GameConfig';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('ScrollingObject')
export class ScrollingObject extends Component {

    private _rb2D: RigidBody2D;

    start() {
        this._rb2D = this.node.getComponent(RigidBody2D);
    }

    update(deltaTime: number) {
        if (GameManager.Instance.isGameOver) {
            this._rb2D.linearVelocity = Vec2.ZERO;
            return;
        }
        this._rb2D.linearVelocity = new Vec2(GameConfig.Instance.scrollingSpeed, 0)
        // this.node.translate(new Vec3(GameConfig.Instance.scrollingSpeed * deltaTime, 0, 0));
    }
}


