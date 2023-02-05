import { _decorator, Component, Node, Prefab, CCInteger, instantiate, Vec2, Vec3, random, randomRange } from 'cc';
import * as Config from './GameConfig';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawner')
export class PipeSpawner extends Component {
    @property({ type: Prefab })
    pipePrefab: Prefab = null!;
    @property({ type: CCInteger })
    pipePoolSize: number = 5;

    private pipes: Node[];
    private objectPoolPos: Vec3 = new Vec3(-5000, -5000, 0);
    private timeSinceLastSpawned: number = 0;
    private currentPipeIndex: number = 0;

    start() {
        this.pipes = new Array(this.pipePoolSize);
        for (let index = 0; index < this.pipePoolSize; index++) {
            let pipe = instantiate(this.pipePrefab);
            pipe.setPosition(this.objectPoolPos);
            pipe.parent = this.node;
            this.pipes[index] = pipe;
        }
    }

    update(deltaTime: number) {
        this.timeSinceLastSpawned += deltaTime;
        if (!GameManager.Instance.isGameOver && this.timeSinceLastSpawned > Config.GameConfig.Instance.pipeSpawnRate) {
            console.log("THIS CASE: " + this.pipes.length);
            this.timeSinceLastSpawned = 0;
            let spawnYPos = randomRange(Config.GameConfig.Instance.pipeMinY, Config.GameConfig.Instance.pipeMaxY);
            this.pipes[this.currentPipeIndex].setPosition(Config.pipeSpawnXPos, spawnYPos, 0);
            console.log(this.pipes[this.currentPipeIndex].position)
            this.currentPipeIndex++;
            this.currentPipeIndex = this.currentPipeIndex % this.pipePoolSize;
        }
    }
}


