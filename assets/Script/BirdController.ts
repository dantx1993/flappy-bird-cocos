import { _decorator, Component, Node, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdController')
export class BirdController extends Component {
    @property({ type: RigidBody2D })
    rb2D: RigidBody2D = null!;

    start() {
        console.log(this.rb2D.getMass());
    }

    update(deltaTime: number) {
        
    }
}


