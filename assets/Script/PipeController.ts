import { _decorator, Component, Node, ITriggerEvent, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeController')
export class PipeController extends Component {
    @property({ type: BoxCollider2D })
    checkBox: BoxCollider2D = null!;

    start() {
        this.checkBox.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log("onBeginContact: " + otherCollider.node.name);
    }
}


