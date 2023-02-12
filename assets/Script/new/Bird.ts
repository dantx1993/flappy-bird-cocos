import { _decorator, Component, Node, CCFloat, EventTouch, Canvas, input, Input, Root, Vec3, Quat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    private speed: number = 0;

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }
    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    update(deltaTime: number) {
        this.speed -= 0.05;
        this.node.position = new Vec3(this.node.position.x, this.node.position.y + this.speed, this.node.position.z)

        var angle = -(this.speed / 2) * 30;
        if (angle >= 30) {
            angle = 30;
        }
        this.node.setRotationFromEuler(new Vec3(0, 0, -angle));
    }

    onTouchStart(event: EventTouch) {
        this.speed = 2;
    }
}


