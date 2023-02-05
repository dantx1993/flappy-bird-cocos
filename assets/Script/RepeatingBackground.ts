import { _decorator, Component, Node, BoxCollider2D, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RepeatingBackground')
export class RepeatingBackground extends Component {
    @property({ type: BoxCollider2D })
    boxCollider2D: BoxCollider2D = null!;

    private groundHorizontalLength: number;

    start() {
        this.groundHorizontalLength = this.boxCollider2D.size.x;
    }

    update(deltaTime: number) {
        if (this.node.position.x < -this.groundHorizontalLength) {
            this.reposBackground();
        }
    }

    private reposBackground()
    {
        var groundOffset = new Vec3(this.groundHorizontalLength * 2, 0, 0);
        this.node.translate(groundOffset);
    }
}


