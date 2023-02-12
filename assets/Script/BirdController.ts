import { _decorator, Component, Node, RigidBody2D, input, Input, EventMouse, Vec2, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdController')
export class BirdController extends Component {
    @property({ type: RigidBody2D })
    rb2D: RigidBody2D = null!;
    @property({ type: CCFloat })
    upForce: number = 200;

    onLoad() {
        input.on(Input.EventType.MOUSE_DOWN, this.addForce, this);
    }
    onDestroy() {
        input.off(Input.EventType.MOUSE_DOWN, this.addForce, this);
    }

    addForce(event: EventMouse) {
        console.log("upForce: " + this.upForce);
        this.rb2D.linearVelocity = Vec2.ZERO;
        this.rb2D.applyLinearImpulseToCenter(new Vec2(0, this.upForce), true);
    }
}


