import { _decorator, Component, Node, Sprite, Vec3, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainControl')
export class MainControl extends Component {

    @property({ type: Sprite })
    spBg: Sprite[] = [null, null];
    @property({ type: Prefab })
    pipePrefab: Prefab = null;

    pipes: Node[] = [null, null, null];
        
    start() {
        for (let index = 0; index < this.pipes.length; index++) {
            this.pipes[index] = instantiate(this.pipePrefab);
            this.node.addChild(this.pipes[index]);

            var minY = -120;
            var maxY = 120;
            this.pipes[index].position = new Vec3(170 + 200 * index, minY + Math.random() * (maxY - minY), this.pipes[index].position.z);
        }
    }

    update(deltaTime: number) {
        for (let index = 0; index < this.spBg.length; index++) {
            var element = this.spBg[index].node;
            element.position = new Vec3(element.position.x - 1.0, element.position.y, element.position.z)
            if (element.position.x <= -288) {
                element.position = new Vec3(288, element.position.y, element.position.z)
            }
        }
        for (let index = 0; index < this.pipes.length; index++) {
            var element = this.pipes[index];
            element.position = new Vec3(element.position.x - 1.0, element.position.y, element.position.z)
            if (element.position.x <= -170) {
                element.position = new Vec3(430, element.position.y, element.position.z)

                var minY = -120;
                var maxY = 120;
                element.position = new Vec3(element.position.x, minY + Math.random() * (maxY - minY), element.position.z);
            }
        }
    }
}


