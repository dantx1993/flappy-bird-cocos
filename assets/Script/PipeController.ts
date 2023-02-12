import { _decorator, Component, Node, ITriggerEvent, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeController')
export class PipeController extends Component {
    @property({ type: BoxCollider2D })
    checkBox: BoxCollider2D = null!;
    @property({ type: BoxCollider2D })
    deadBoxes: BoxCollider2D[] = [null, null];

    onLoad() {
        this.checkBox.on(Contact2DType.BEGIN_CONTACT, this.onTriggerEnter, this);
        this.deadBoxes.forEach(element => {
            console.log("Load element box: " + element.node.name);
            element.on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter, this)
        });
    }
    onDestroy() {
        this.checkBox.off(Contact2DType.BEGIN_CONTACT, this.onTriggerEnter, this);
        this.deadBoxes.forEach(element => {
            element.off(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter, this)
        });
    }
    onTriggerEnter(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log("score++" + otherCollider.node.name);
    }
    onCollisionEnter(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log("dead: " + otherCollider.node.name);
    }
}


