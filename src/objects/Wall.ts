import { Mesh, BoxGeometry, MeshBasicMaterial, Object3D, Group } from 'three';
import { IExist } from './base/iexist';

export class Wall implements IExist {
    private shape: Group;

    public get Shape(): Group {
        return this.shape;
    }

    constructor() {
        this.shape = new Group();
        [[0,10],[0, -10],[10, 0],[-10, 0]].map((position) => {
            const geometry = new BoxGeometry( 1, 1, 1 );
            const material = new MeshBasicMaterial( { color: 0xfafafa } );

            const shape = new Mesh( geometry, material );
            shape.position.x = position[0];
            shape.position.z = position[1];
            this.shape.add(shape);
        });
    }

    update() {
        // this.shape.rotation.y += 0.01;
    }
}